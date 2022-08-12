import { Address, Hours, Image, WebsiteUrl } from "@yext/types"

// TODO: potentially move this to @yext/types
// Also we should probably move @yext/types into @yext/pages
// since they're specific to pages streams, not generic kg types
interface BaseProfile {
	id: string
	businessId: number
	locale: string
	siteDomain: string
	siteId: number
	siteInternalHostname: string
	uid: number
	meta: {
		entityType: {
			id: string
			uid: number
		}
		locale: string
	}
}

export interface financialProfessional {
	id: string;
	name: string;
	headshot?: Image;
	mainPhone?: string;
	c_occupation?: string;
	emails?: string[];
	websiteUrl?: WebsiteUrl;
}

// TODO: generate these automatically from stream definitions
export interface LocationProfile extends BaseProfile {
	name: string
	address: Address
	slug: string
	hours?: Hours
	mainPhone?: string
	description?: string
	// Add custom fields here
	// c_myStringField: string
	c_team?: financialProfessional[];
}

export type DirectoryProfile<T> = BaseProfile & {
	name: string
	dm_directoryChildrenCount: number
	dm_directoryChildren?: T[]
	dm_directoryParents?: DirectoryProfile<DirectoryProfile<T>>[]
	slug: string
}