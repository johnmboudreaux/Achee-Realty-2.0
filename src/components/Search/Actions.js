export const loadPropertyDetails = propertyDetails => ({
  type: 'LOAD_PROPERTY_DETAILS',
  propertyDetails,
});

export const loadPropertyComps = propertyComps => ({
  type: 'LOAD_PROPERTY_COMPS',
  propertyComps,
});

// export const loadPropertyDetails = (address, citystatezip) => {
//   return (dispatch) => {
//     return fetch(
//       `/api/v1/deepSearch?address=${address}&citystatezip=${citystatezip}`,
//     )
//       .then(results => results.json())
//       .then(parsedResponse => console.log(parsedResponse))
//       .then(listingData =>
//         dispatch(
//           loadPropertyDetailsSuccess(listingData.response.results.result),
//         ),
//       )
//       .catch(error => console.log(error));
//   };
// };
