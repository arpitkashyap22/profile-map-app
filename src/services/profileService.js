let profiles = [];

const loadProfiles = async () => {
  const response = await fetch('/profiles.json');
  const data = await response.json();
  profiles = data;
};

const saveProfiles = async (newProfiles) => {
  profiles = newProfiles;
  // Simulate persistence or use backend
};

class ProfileService {
  static async getProfiles() {
    if (profiles.length === 0) {
      await loadProfiles(); // Reuse the `loadProfiles` function
    }
    return profiles;
  }

  static async addProfile(newProfile) {
    newProfile.id = profiles.length;
    profiles.unshift(newProfile);
    await saveProfiles(profiles); // Save after adding the profile
    return profiles;
  }

  static async modifyProfile(updatedProfile) {
    profiles = profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    await saveProfiles(profiles); // Save after modification
    return profiles;
  }

  static async deleteProfile(id) {
    profiles = profiles.filter(profile => profile.id !== id);
    await saveProfiles(profiles); // Save after deletion
    return profiles;
  }
}

export default ProfileService; // No need to instantiate the class
