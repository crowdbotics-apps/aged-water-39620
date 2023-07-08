import axios from "axios"
const agedwaterAPI = axios.create({
  baseURL: "https://ca-coastal-loans-39620.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return agedwaterAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return agedwaterAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return agedwaterAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_camera_photos_user_list(payload) {
  return agedwaterAPI.get(`/modules/camera/photos/user/`)
}
function modules_camera_photos_user_retrieve(payload) {
  return agedwaterAPI.get(`/modules/camera/photos/user/${payload.id}/`)
}
function modules_camera_upload_image_create(payload) {
  return agedwaterAPI.post(`/modules/camera/upload_image/`)
}
function modules_privacy_policy_list(payload) {
  return agedwaterAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return agedwaterAPI.post(`/modules/privacy-policy/`, payload.data)
}
function modules_privacy_policy_retrieve(payload) {
  return agedwaterAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return agedwaterAPI.put(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_partial_update(payload) {
  return agedwaterAPI.patch(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_destroy(payload) {
  return agedwaterAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_terms_and_conditions_list(payload) {
  return agedwaterAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return agedwaterAPI.post(`/modules/terms-and-conditions/`, payload.data)
}
function modules_terms_and_conditions_retrieve(payload) {
  return agedwaterAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return agedwaterAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return agedwaterAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return agedwaterAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return agedwaterAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return agedwaterAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return agedwaterAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return agedwaterAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return agedwaterAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return agedwaterAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return agedwaterAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return agedwaterAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return agedwaterAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return agedwaterAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return agedwaterAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_camera_photos_user_list,
  modules_camera_photos_user_retrieve,
  modules_camera_upload_image_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
