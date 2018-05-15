// export const loadCurrentListingsSuccess = currentListings => ({
//   type: 'LOAD_CURRENT_LISTINGS',
//   currentListings,
// });
//
// export const loadCurrentListings = (address, citystatezip) => {
//   console.log(address);
//   return (dispatch) => {
//     return fetch(`/api/v1/search?address=${address}&citystatezip=${citystatezip}`)
//       .then(results => results.json())
//       .then(listingData => dispatch(loadCurrentListingsSuccess(listingData)))
//       .catch(error => console.log(error));
//   };
// };
