module.exports = {
  apps : [{
    instances : "max",
    script: 'index.js',
    name: "jokes",
    exec_mode : "cluster",
 env: {
      NODE_ENV: "production",
    }

  }],

  
};
