// src/services/ProfileService.js
let profiles = [];

const loadProfiles = async () => {
  const response = await fetch('/profiles.json');
  const data = await response.json();
  profiles = data;
};

const saveProfiles = async (newProfiles) => {
  profiles = newProfiles;
  // This would be where you save to a backend or simulate persistence
};

class ProfileService {
  static async getProfiles() {
    if (profiles.length === 0) {
      await loadProfiles();
    }
    return profiles;
  }

  static async addProfile(newProfile) {
    newProfile.id = profiles.length;
    profiles.unshift(newProfile);
    await saveProfiles(profiles);
    return profiles;
  }

  static async modifyProfile(updatedProfile) {
    profiles = profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    await saveProfiles(profiles);
    return profiles;
  }

  static async deleteProfile(id) {
    profiles = profiles.filter(profile => profile.id !== id);
    await saveProfiles(profiles);
    return profiles;
  }
}

const profileService = new ProfileService();
export default profileService;
