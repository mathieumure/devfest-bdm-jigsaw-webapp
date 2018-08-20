export default class Infos {
  javaSpecificationVersion: string;
  javaVersion: string;
  javaVendor: string;
  moduleName: string;
  modules: Array<string>;

  constructor(info: Infos) {
    this.javaSpecificationVersion = info.javaSpecificationVersion;
    this.javaVersion = info.javaVersion;
    this.javaVendor = info.javaVendor;
    this.moduleName = info.moduleName;
    this.modules = info.modules;
  }
}
