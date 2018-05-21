export const loadCurrentListingsSuccess = currentListings => ({
  type: 'LOAD_CURRENT_LISTINGS',
  currentListings,
});

export const loadCurrentListings = (address, citystatezip) => {
  return (dispatch) => {
    return fetch(
      `/api/v1/search?address=${address}&citystatezip=${citystatezip}`,
    )
      .then(results => results.json())
      .then(listingData =>
        dispatch(
          loadCurrentListingsSuccess(listingData.response.results.result),
        ),
      )
      .catch(error => console.log(error));
  };
};
