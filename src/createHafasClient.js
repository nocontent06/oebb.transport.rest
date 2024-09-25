
import { createClient } from 'hafas-client';
import { profile as oebbProfile } from 'hafas-client/p/oebb/index.js';

const userAgent = 'your-hafas-project-email'; // adapt this to your project
const client = createClient(oebbProfile, userAgent);

export default client;