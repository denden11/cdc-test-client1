function showAccInfo(response) {
  console.log(response);
}
var idsParams = {
  include: 'profile, data',
  extraProfileFields: 'languages, certifications',
  callback: showAccInfo
};
gigya.ids.getAccountInfo(idsParams);