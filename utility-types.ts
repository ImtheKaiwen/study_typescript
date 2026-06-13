interface IUserProfile {
    id: number,
    username: string,
    avatarUrl: string,
}


// makes all entries optional
function updateProfile(id: number, fieldsToUpdate: Partial<IUserProfile>) {
    console.log(`Updating user ${id} with new data...`);
}

updateProfile(1, {avatarUrl: 'https://new-avatar.png'});


// Picks the setted values
type LeaderBoardData  = Pick<IUserProfile, 'id' | 'username'>;

const player : LeaderBoardData = {
    id: 1,
    username: 'kaiwen',
};

// Picks the values except setted

type NewRegistration = Omit<IUserProfile, 'id'>;

const signUpForm : NewRegistration = {
    avatarUrl: 'https://avatar.png',
    username: 'kaiwen'
}