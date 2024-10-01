import {createClient as createHafas} from 'hafas-client'
import {profile as dbProfile} from 'hafas-client/p/oebb/index.js'
import {createHafasRestApi as createApi} from 'hafas-rest-api'

const config = {
	hostname: 'v6.oebb.transport.rest',
	name: 'OEBB Transport Rest API',
	homepage: 'https://github.com/nocontent06/oebb.transport.rest',
	version: '1.0.0',
	aboutPage: false
}

const hafas = createHafas(dbProfile, 'admin@macistry.com')
const api = await createApi(hafas, config)

export default api