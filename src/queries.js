export const next = `launchNext {
  launch_date_local
  mission_name
	details
	links {
		mission_patch_small
	}
  rocket {
    rocket {
			name
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
    }
  }
}`;

export const past = offset => `launchesPast(offset: ${offset || 0}, limit: 1) {
  id
  launch_date_local
  mission_name
	rocket {
    rocket {
			name
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      name
    }
  }
	links {
		video_link
		article_link
		flickr_images
		mission_patch_small
	}
}`;

export const last = `launchLatest {
	id
}`;
