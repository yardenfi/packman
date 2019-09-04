import Command, { CommandExecuteOptions } from '../../../core/Command';
import { globalOptions, forceOption } from '../../../core/commandOptions';
import { fetch } from '../../../core/fetcher';
import { npmDownloadOptions, NpmDownloadOptions } from '../npm-options';
import { getCurrentRegistry, getAllEndpointUrl } from '../npm-utils';
import { getDependenciesFromSearchResults, SearchResults } from '../crawler';
import { downloadFromIterable } from './downloader';

export type NpmDownloadAllCommandOptions =
  NpmDownloadOptions
  & CommandExecuteOptions
  & {
    force?: boolean
    filters?: [(currentPackage: any) => boolean]
  }

export default class NpmDownloadAllCommand implements Command {
  get definition() {
    return {
      name: 'all',
      description: 'download tarballs for all packages hosted by the registry',
      options: [
        ...npmDownloadOptions,
        forceOption,
        ...globalOptions,
      ],
    };
  }

  async execute(options: NpmDownloadAllCommandOptions) {
    const registry = options.registry || await getCurrentRegistry(options);
    const uri = getAllEndpointUrl(registry, options);
    const { body: searchResults } = await fetch<SearchResults>({ ...options, uri, responseType: 'json' });
    const packages = await getDependenciesFromSearchResults(searchResults, { ...options, registry });
    return downloadFromIterable(packages, options.directory, options);
  }
}
