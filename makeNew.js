function getName() {
  return this.name;
}

function getWebsite() {
  return this.website;
}

function Company(name, website) {
  this.name = name;
  this.website = website;
  this.getName = getName;
  this.getWebsite = getWebsite;
}
export default Company;
