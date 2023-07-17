import OS from 'os';

export const getNumberCPUCores = () => OS.cpus().length;
