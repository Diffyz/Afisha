const IsDevelopment = true;
const SSLCertificate = false;
const HTTPProtocol = SSLCertificate ? 'https' : 'http';
const PortKinoAfishaApi = '9000';
const Name = IsDevelopment
	? `localhost:${PortKinoAfishaApi}/api/`
	: 'something';
const DomainName = `${HTTPProtocol}://${Name}`;

export { DomainName };
