import axios from 'axios'
export const client_Id = '966040164858-d01oql7ungul6fcpoc3e0ft0vqalnuhc.apps.googleusercontent.com'
export const app_Id = '925635032065854'
export const google_url = 'https://www.googleapis.com/oauth2/v3/userinfo'
export const facebook_url = 'https://graph.facebook.com/v13.0/'

export async function getGoogleData(token) {
  const { data } = await axios.get(google_url, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const option = {
    email: data.email,
    google_id: data.sub,
    firstname: data.given_name,
  }
  return option
}

export async function getFacebookData(userId, token) {
  const { data } = await axios.get(
    `${facebook_url}/${userId}?fields=name,email&access_token=${token}`
  )
  const option = {
    email: data.email,
    facebook_id: userId,
    firstname: data.name,
  }
  return option
}
