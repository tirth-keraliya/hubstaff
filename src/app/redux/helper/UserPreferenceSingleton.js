const { USER_PREFERENCES } = require("../constansts/constant");

let singleton;
const singletonEnforcer = Symbol();
const parseDataFile = (defaults) => {
  try {
    const settings = localStorage.getItem(USER_PREFERENCES);
    if (settings) return JSON.parse(settings);
    return {};
  } catch (error) {
    return defaults;
  }
};

const containskey = (obj, key) => ({}.hasOwnProperty.call(obj || {}, key));

class UserPreferences {
  constructor(opts) {
    this.defaults = opts.defaults;
    this.data = parseDataFile(opts.defaults);
  }
  get(key, defaultValue) {
    if (containskey(this.data, key)) {
      return this.data[key];
    }
    return defaultValue;
  }

  save(settings) {
    localStorage.setItem(USER_PREFERENCES, JSON.stringify(settings));
  }
  set(key, value) {
    this.data = parseDataFile(this.defaults);
    this.data[key] = value;
    this.save(this.data);
  }

  remove(key) {
    delete this.data[key];
    this.save(this.data);
  }

  parseDataFile() {
    this.data = parseDataFile(this.defaults);
  }
  contains(key) {
    return Object.prototype.hasOwnProperty.call(this.data, key);
  }
}
export default class UserPreferenceSingleton {
  static get CURRENT_USER() {
    return "current_user";
  }
  static get ORGANIZATION() {
    return "organization";
  }
  static get ORGANIZATIONS() {
    return "organizations";
  }
  static get REPORT_DATE_PREFERENCES() {
    return "report_date_preferences";
  }
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer)
      throw new Error("Cannot construct singleton");
    this.UserPreferences = new UserPreferences({
      configName: "user-preferences",
      defaults: {
        windowBounds: { width: 800, height: 600 },
      },
    });
  }
  static getInstance() {
    if (!singleton) {
      singleton = new UserPreferenceSingleton(singletonEnforcer);
    }
    return singleton;
  }
  static removeInstance() {
    singleton = undefined;
  }
  getOrganization() {
    return this.UserPreferences.get(
      UserPreferenceSingleton.ORGANIZATION,
      undefined
    );
  }

  setOrganization() {
    return this.UserPreferences.set(
      UserPreferenceSingleton.ORGANIZATION,
      value
    );
  }
  getOrganizations() {
    return this.userPreferences.get(
      UserPreferenceSingleton.ORGANIZATIONS,
      undefined
    );
  }

  setOrganizations(value) {
    return this.userPreferences.set(
      UserPreferenceSingleton.ORGANIZATIONS,
      value
    );
  }

  setCurrentUser(value) {
    return this.userPreferences.set(
      UserPreferenceSingleton.CURRENT_USER,
      value
    );
  }

  getCurrentUser() {
    return this.userPreferences.get(
      UserPreferenceSingleton.CURRENT_USER,
      undefined
    );
  }

  setReportDatePreferences(value) {
    return this.userPreferences.set(
      UserPreferenceSingleton.REPORT_DATE_PREFERENCES,
      value
    );
  }

  getReportDatePreferences() {
    return this.userPreferences.get(
      UserPreferenceSingleton.REPORT_DATE_PREFERENCES,
      undefined
    );
  }

  get(key, defaultValue = null) {
    return this.userPreferences.get(key, defaultValue);
  }
  set(key, value) {
    this.userPreferences.set(key, value);
  }

  clearStoredUserData() {
    localStorage.removeItem(USER_PREFERENCES);
  }
}
