function showAccInfo(response) {
  alert(response.UID);
}
var idsParams = {
  include: 'profile, data',
  extraProfileFields: 'languages, certifications',
  callback: showAccInfo
};
gigya.ids.getAccountInfo(idsParams);