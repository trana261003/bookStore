// // src/utils.js
// export const generateProfilePicture = (username) => {
//     return `https://ui-avatars.com/api/?name=${username}&background=random`;
//   };
  


// src/utils.js
export const generateProfilePicture = (username) => {
  const backgroundColor = '00FFFF'; // Cyan background color
  const encodedUsername = encodeURIComponent(username);
  return `https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&facialHairType=BeardMedium&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&hairColor=Brown&facialHairColor=Brown&clotheColor=Red&background=${backgroundColor}&name=${encodedUsername}`;
};



