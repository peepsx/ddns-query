const dwebtrie = require('dwebtrie');

export default class Query {
  constructor (location, record) {
    this.location = location;
    this.record = record;
  
    this.recordPrefix = `/${this.record}/`;
    this.rdataKey = this.recordPrefix + 'rdata';
    this.ttlKey = this.recordPrefix + 'ttl';
    this.classKey = this.recordPrefix + 'class';
    this.typeKey = this.recordPrefix + 'type';
    this.domainDb = dwebtrie(this.location, {valueEncoding: 'json'});
  };
  record() {
    let recordArray = [this.rdataKey, this.ttlKey, this.classKey, this.typeKey];
    let answer = [];
    
    recordArray.forEach((x,i) => {
      this.domainDb.get(x, data => {
        if (i = 0) {
          answer.push({rdata: data});
        }
        if (i = 1) {
          answer.push({ttl: data});
        }
        if (i = 2) {
          answer.push({class: data});
        }
        if (i = 3) {
          answer.push({type: data});
        }
      });
    });
    return answer;
  };
  rdata() {
    this.domainDb.get(this.rdataKey, answer => {
      return answer;
    });
  };
  ttl() {
    this.domainDb.get(this.ttlKey, answer => {
      return answer;
    });
  };
  class() {
    this.domainDb.get(this.classKey, answer => {
      return answer;
    });
  };
  type() {
    this.domainDb.get(this.typeKey, answer => {
      return answer;
    });
  };
}