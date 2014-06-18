module( "smoothing" );

test( "convolve method", function() {
  var y = [191,172,184,172,168,195,163,195,169,176,179,170,171, 156,174,168,188,148,143,172,170,152,141,141,171,188, 195,198,201,188,225,255,255,244,170,224,253,248,208, 168,222,240,225,170,179,220,227,201,163,201,228,224, 184,172,205,222,206,177,187,221,229,204,198,211,237, 236,207,199,223,238,223,201,202,229,238,215,187,202, 227,228,207,201,220,240,236,216,205,203,210,199,174, 166,167,169,158,155,158,165,160,149,148,144,138,136, 133,131,129,131,134,126,122,130,125,125,122,123,128, 124,116,109,119,125,117,108,113,118,116,118,118,114, 113,115,108,102,117,126,119,115,117,126,127,130,130, 134,137,139,152,149,141,152,164,171,169,168,172,180, 182,175,164,151,152,150,148,149,145,138,130,143,143, 142,135,135,139,141,151,150,145,148,147,154,153,148, 152,147,131,124,110,97,94,88,88,99,115,129,129, 126,125,127,130,126,119,121,121,121,122,122,107,108, 115,119,108,108,111,107,111,106,110,110,116,119,113, 104,115,125,128,133,129,120,107,110,113,117,110,113, 121,126,121,110,99,97,107,117,121,118,124,125,123, 121,118,115,114,116,111,116,121,127,125,125,126,128, 131,129,123,118,115,105,114,106,98,96,95,96,85, 78,69,63,40,37,42,42,45,42,35,26,28,36, 45,46,47,48,44,45,51,53,62,65,59,48,41, 55,47,40,46,60,65,64,70,82,84,82,78,86, 81,82,93,103,106,104,106,111,115,107,96,93,87, 86,92,92,91,95,88,72,57,52,64,61,53,54, 55,54,56,56,55,65,65,64,64,74,74,73,69, 63,74,80,78,78,68,84,95,91,82,84,86,86, 81,86,87,76,82,91,95,82,91,100,89,91,95, 86,87,84,75,62,64,61,57,51,45,40,37,35, 24,30,31,30,21,27,24,29,25,23,32,34,22, 30,37,41,37,27,30,27,23,26,22,15,8,3, 0,5,12,10,13,19,15,13,23,24,21,30,42, 49,49,45,54,66,66,60,59,65,70,69,59,72, 69,79,79,72,77,78,84,82,77,81,93,96,97, 93,93,102,103,100,102,102,98,99,100,96,95,99, 92,96,101,91,96,105,108,100,103,111,115,113,105, 96,106,100,96,88,100,104,98,98,90,84,86,88, 77,74,80,89,82,74,74,76,76,69,75,81,81, 81,88,91,93,87,92,93,83,83,81,86,85,81, 87,85,89,85,77,64,74,81,73,65,72,79,70, 59,60,63,69,68,60,58,64,64,54,60,49,40, 54,48,46,52,55,50,50,43,40,43,48,50,47, 56,63,56,62,73,62,57,76,75,78,73,75,79, 77,80,74,69,74,86,89,88,83,82,86,85,76, 66,73,76,76,71,71,70,64,51,48,59,61,53, 50,65,73,73,73,71,68,71,89,96,94,83,83, 86,87,90,91,91,86,83,88,85,79,90,85,86, 89,94,82,79,90,102,105,99,96,102,102,99,110, 112,103,94,97,107,105,99,99,89,82,79,84,88, 95,102,100,97,101,101,101,91,72,72,76,74,64, 59,59,58,54,57,52,55,65,65,60,57,64,67, 65,60,63,68,65,61,63,59,63,59,65,82,83, 85,85,88,92,94,108,113,104,107,105,101,93,95, 97,89,92,93,92,108,102,106,100,95,99,96,98, 96,92,93,93,86,87,87,89,84,82,85,84,84, 81,73,86,96,99,98,94,96,106,112,116,107,112, 104,102,101,90,89,89,92,87,78,74,69,71,59, 60,64,56,69,81,86,82,87,84,90,95,89,88, 94,102,106,102,93,92,105,109,109,99,102,105,101, 108,110,110,113,108,116,116,113,104,100,105,106,105, 100,94,103,98,90,93,107,108,96,84,92,93,95, 97,98,95,93,88,83,91,90,82,84,94,97,89, 99,104,99,94,95,103,92,92,99,99,104,99,101, 101,100,107,104,97,103,105,106,107,103,97,89,92, 97,96,90,90,97,91,91,98,94,87,82,72,77, 80,76,81,75,73,75,70,68,66,68,64,59,51, 51,60,60,60,60,57,59,64,68,64,58,57,42, 62,63,59,57,57,60,58,59,63,57,63,67,66, 58,54,48,50,58,59,55,64,74,71,71,74,85, 88,87,76,81,88,101,104,104,95,91,95,107,107, 103,93,92,104,108,103,91,91,97,92,78,85,91, 89,84,79,76,77,79,79,76,76,70,65,66,66, 69,64,64,58,54,60,58,61,64,60,54,54,58, 58,60,67,70,67,63,73,80,77,72,79,82,78, 77,79,85,96,86,77,73,70,83,79,84,65,85, 97,85,82,84,98,101,91,83,85,97,98,99,95, 92,89,90,93,91,95,92,92,83,83,91,84,83, 78,77,80,75,78,80,82,79,75,69,73,74,65, 64,63,63,59,52,56,52,57,52,52,45,47,44, 39,39,34,34,27,31,30,23,19,14,15,16,19, 23,30,31,27,34,34,39,39,44,47,45,52,52, 57,52,56,52,59,63,63,64,65,74,73,69];
  var m = [0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182,0.01818182];

  var desired = [191.09090909,191.65454545,192.27272727,192.14545455,192.41818182,193.38181818,194.,194.74545455,194.8,195.56363636,196.67272727,197.70909091,198.38181818,198.89090909,200.10909091,201.27272727,202.27272727,202.50909091,203.49090909,205.05454545,206.25454545,207.07272727,207.70909091,208.81818182,210.38181818,211.41818182,211.76363636,211.87272727,212.27272727,212.98181818,213.85454545,213.69090909,212.78181818,211.83636364,211.21818182,211.74545455,210.83636364,209.25454545,207.78181818,207.07272727,206.89090909,205.67272727,204.18181818,203.09090909,202.90909091,202.36363636,201.05454545,199.54545455,198.4,197.90909091,196.67272727,194.90909091,193.18181818,192.21818182,191.52727273,190.09090909,188.27272727,186.89090909,185.94545455,184.81818182,183.01818182,181.09090909,179.70909091,178.36363636,176.63636364,174.30909091,172.18181818,170.69090909,169.2,167.10909091,164.83636364,162.92727273,161.38181818,159.85454545,157.83636364,155.58181818,153.72727273,152.41818182,150.70909091,148.43636364,146.41818182,144.94545455,143.45454545,141.54545455,139.30909091,137.30909091,135.69090909,134.32727273,133.,131.61818182,130.49090909,129.85454545,129.6,129.27272727,128.76363636,128.65454545,128.81818182,129.05454545,129.12727273,129.27272727,129.69090909,130.27272727,130.96363636,131.63636364,132.14545455,132.47272727,132.85454545,133.23636364,133.54545455,133.81818182,134.16363636,134.45454545,134.45454545,134.78181818,135.10909091,135.47272727,135.69090909,135.81818182,136.09090909,136.54545455,137.30909091,137.87272727,138.23636364,138.8,139.50909091,140.25454545,140.89090909,141.47272727,142.09090909,142.61818182,142.92727273,143.12727273,143.03636364,142.83636364,142.69090909,142.16363636,141.47272727,141.10909091,141.10909091,141.32727273,141.38181818,141.36363636,141.27272727,141.21818182,141.14545455,140.94545455,140.58181818,140.01818182,139.50909091,139.14545455,138.6,137.83636364,136.67272727,135.56363636,134.6,133.63636364,132.32727273,130.98181818,129.81818182,128.78181818,128.05454545,127.21818182,126.49090909,125.8,125.2,124.72727273,124.27272727,123.8,123.29090909,122.96363636,122.70909091,122.67272727,122.56363636,122.21818182,121.6,120.85454545,120.18181818,119.67272727,118.98181818,118.36363636,117.76363636,117.27272727,116.78181818,116.01818182,115.14545455,114.52727273,114.21818182,114.34545455,114.78181818,115.21818182,115.87272727,116.54545455,116.98181818,117.09090909,116.89090909,116.63636364,116.41818182,116.25454545,115.96363636,115.70909091,115.61818182,115.76363636,115.83636364,115.90909091,116.,116.10909091,116.27272727,116.67272727,116.94545455,117.,116.92727273,116.87272727,116.98181818,116.89090909,116.72727273,116.45454545,116.25454545,116.,115.54545455,114.85454545,113.94545455,113.03636364,111.87272727,110.45454545,108.94545455,107.38181818,105.78181818,104.2,102.65454545,101.18181818,99.69090909,98.29090909,96.98181818,95.81818182,94.61818182,93.29090909,91.8,90.41818182,89.34545455,88.50909091,87.87272727,87.10909091,86.05454545,84.72727273,83.32727273,82.07272727,80.65454545,79.14545455,77.78181818,76.72727273,75.81818182,74.90909091,74.07272727,73.54545455,72.96363636,72.25454545,71.36363636,70.65454545,69.85454545,69.05454545,68.41818182,67.90909091,67.49090909,67.14545455,66.92727273,66.85454545,67.03636364,66.90909091,66.72727273,66.63636364,66.47272727,66.30909091,66.23636364,66.36363636,66.6,67.07272727,67.52727273,68.10909091,68.47272727,68.65454545,69.05454545,69.34545455,69.54545455,69.89090909,70.41818182,70.89090909,71.25454545,71.45454545,71.61818182,71.94545455,72.25454545,72.61818182,72.96363636,73.38181818,73.76363636,73.96363636,74.03636364,74.10909091,74.58181818,75.29090909,75.70909091,76.27272727,76.78181818,77.47272727,78.10909091,78.58181818,78.90909091,79.16363636,79.23636364,79.27272727,79.25454545,79.4,79.41818182,79.32727273,79.32727273,79.29090909,79.14545455,78.70909091,78.47272727,78.36363636,77.96363636,77.52727273,77.30909091,77.12727273,77.01818182,76.96363636,76.76363636,76.21818182,75.70909091,75.16363636,74.47272727,73.8,73.30909091,73.,72.72727273,72.2,71.52727273,71.10909091,70.69090909,70.23636364,69.63636364,69.10909091,68.52727273,68.05454545,67.32727273,66.56363636,65.98181818,65.43636364,64.49090909,63.69090909,63.03636364,62.52727273,62.05454545,61.2,60.29090909,59.36363636,58.36363636,57.6,56.47272727,55.01818182,53.50909091,52.07272727,50.54545455,49.07272727,47.72727273,46.43636364,45.10909091,43.87272727,42.76363636,41.50909091,40.27272727,38.98181818,37.87272727,36.76363636,35.70909091,34.98181818,34.21818182,33.30909091,32.72727273,32.34545455,32.01818182,31.74545455,31.69090909,31.70909091,31.87272727,32.09090909,32.23636364,32.72727273,33.25454545,34.01818182,34.81818182,35.69090909,36.54545455,37.4,38.38181818,39.49090909,40.4,41.43636364,42.6,43.89090909,45.23636364,46.34545455,47.41818182,48.87272727,50.2,51.34545455,52.45454545,53.63636364,54.92727273,56.18181818,57.50909091,58.83636364,60.09090909,61.49090909,62.89090909,64.49090909,66.27272727,67.92727273,69.58181818,71.27272727,73.05454545,74.63636364,76.16363636,77.90909091,79.76363636,81.4,82.87272727,84.23636364,85.61818182,86.67272727,87.52727273,88.23636364,89.23636364,90.14545455,90.72727273,91.30909091,91.85454545,92.30909091,92.69090909,93.01818182,93.16363636,93.43636364,93.58181818,93.94545455,94.,93.90909091,93.94545455,93.92727273,93.89090909,93.61818182,93.49090909,93.56363636,93.56363636,93.34545455,93.2,93.09090909,93.09090909,92.98181818,92.8,92.61818182,92.30909091,91.96363636,91.58181818,91.36363636,91.10909091,90.76363636,90.6,90.41818182,90.23636364,90.10909091,89.76363636,89.09090909,88.78181818,88.50909091,87.92727273,87.14545455,86.63636364,86.2,85.45454545,84.43636364,83.47272727,82.70909091,82.21818182,81.52727273,80.8,80.10909091,79.67272727,79.01818182,78.10909091,77.41818182,76.52727273,75.61818182,75.07272727,74.38181818,73.61818182,73.16363636,72.81818182,72.27272727,71.56363636,70.85454545,70.23636364,69.67272727,69.16363636,68.69090909,68.29090909,67.94545455,67.61818182,67.16363636,66.81818182,66.54545455,66.01818182,65.36363636,65.16363636,64.85454545,64.58181818,64.4,64.25454545,64.21818182,64.05454545,63.96363636,63.83636364,63.50909091,63.30909091,63.25454545,63.32727273,63.52727273,63.87272727,64.01818182,64.10909091,64.32727273,64.52727273,64.41818182,64.30909091,64.41818182,64.72727273,64.92727273,65.07272727,65.09090909,65.01818182,64.85454545,64.67272727,64.58181818,64.52727273,64.50909091,64.32727273,64.61818182,65.21818182,65.56363636,66.01818182,66.47272727,66.76363636,67.05454545,67.76363636,68.6,69.52727273,70.30909091,71.03636364,71.72727273,72.4,73.18181818,73.81818182,74.32727273,74.87272727,75.25454545,75.52727273,75.94545455,76.34545455,76.6,76.78181818,76.92727273,77.21818182,77.56363636,77.61818182,77.65454545,77.83636364,78.34545455,79.,79.45454545,79.63636364,79.87272727,80.12727273,80.41818182,80.92727273,81.4,81.72727273,82.05454545,82.61818182,83.23636364,83.76363636,84.18181818,84.69090909,85.01818182,85.23636364,85.50909091,86.10909091,86.83636364,87.49090909,88.23636364,89.09090909,89.94545455,90.6,91.10909091,91.61818182,91.94545455,91.96363636,92.03636364,92.12727273,91.85454545,91.27272727,90.63636364,90.2,89.74545455,89.16363636,88.61818182,87.92727273,87.27272727,86.8,86.41818182,86.,85.43636364,85.05454545,84.83636364,84.38181818,83.92727273,83.50909091,83.12727273,82.6,82.21818182,81.92727273,81.36363636,80.65454545,79.81818182,79.2,78.94545455,78.6,78.29090909,78.03636364,77.63636364,77.27272727,77.10909091,77.36363636,77.65454545,77.6,77.63636364,77.74545455,77.78181818,77.85454545,78.09090909,78.41818182,78.50909091,78.58181818,78.54545455,78.36363636,78.50909091,78.6,78.69090909,78.67272727,78.56363636,78.70909091,79.14545455,79.61818182,79.98181818,80.30909091,80.83636364,81.45454545,81.94545455,82.47272727,83.07272727,83.65454545,84.23636364,84.72727273,85.09090909,85.43636364,85.87272727,86.30909091,86.47272727,86.81818182,87.38181818,88.09090909,88.72727273,89.2,89.76363636,90.58181818,91.47272727,92.50909091,93.30909091,94.27272727,94.98181818,95.34545455,95.67272727,95.76363636,95.83636364,95.85454545,95.85454545,95.72727273,95.18181818,94.47272727,93.83636364,93.18181818,92.34545455,91.6,91.07272727,90.36363636,89.85454545,89.70909091,89.6,89.4,89.30909091,88.87272727,88.65454545,88.45454545,88.25454545,88.12727273,88.03636364,88.14545455,88.29090909,88.4,88.41818182,88.4,88.61818182,89.03636364,89.43636364,89.65454545,89.89090909,90.27272727,90.61818182,91.03636364,91.50909091,91.98181818,92.56363636,93.2,93.74545455,94.10909091,94.36363636,94.47272727,94.58181818,94.74545455,94.74545455,94.61818182,94.32727273,94.09090909,93.92727273,93.81818182,93.6,93.45454545,93.76363636,94.10909091,94.23636364,94.09090909,94.18181818,94.45454545,94.83636364,95.34545455,95.83636364,96.49090909,97.09090909,97.52727273,98.01818182,98.41818182,98.58181818,98.50909091,98.54545455,98.67272727,98.90909091,98.89090909,98.96363636,99.23636364,99.43636364,99.43636364,99.30909091,99.25454545,99.07272727,99.05454545,99.18181818,99.07272727,98.98181818,98.8,98.83636364,98.81818182,98.72727273,98.83636364,98.76363636,98.52727273,98.4,98.25454545,98.21818182,98.05454545,97.81818182,97.52727273,97.25454545,97.10909091,96.96363636,96.78181818,96.50909091,96.32727273,96.38181818,96.16363636,96.03636364,96.18181818,96.2,95.83636364,95.36363636,94.92727273,94.8,94.58181818,94.27272727,94.01818182,93.61818182,93.16363636,92.8,92.38181818,92.01818182,91.70909091,91.29090909,90.81818182,90.4,89.8,89.01818182,88.34545455,87.81818182,87.10909091,86.30909091,85.54545455,84.90909091,84.34545455,83.70909091,83.2,82.58181818,81.81818182,80.78181818,80.01818182,79.36363636,78.6,77.8,77.01818182,76.16363636,75.32727273,74.63636364,73.90909091,73.03636364,72.25454545,71.52727273,70.85454545,70.14545455,69.50909091,68.70909091,67.85454545,67.16363636,66.6,65.96363636,65.36363636,65.05454545,64.69090909,64.2,63.83636364,63.8,63.90909091,64.18181818,64.16363636,64.18181818,64.4,64.76363636,65.29090909,65.85454545,66.21818182,66.6,67.09090909,67.83636364,68.54545455,69.25454545,69.87272727,70.61818182,71.58181818,72.45454545,73.23636364,73.8,74.36363636,75.09090909,75.69090909,75.94545455,76.25454545,76.74545455,77.30909091,77.8,78.47272727,78.72727273,78.98181818,79.34545455,79.74545455,80.09090909,80.38181818,80.6,80.70909091,80.76363636,80.92727273,81.03636364,80.98181818,80.94545455,80.94545455,80.94545455,81.16363636,81.30909091,81.36363636,81.45454545,81.54545455,81.36363636,81.,80.76363636,80.52727273,80.27272727,79.94545455,79.61818182,79.25454545,79.01818182,78.87272727,78.72727273,78.29090909,77.70909091,77.25454545,77.01818182,76.78181818,76.45454545,75.94545455,75.54545455,75.41818182,75.29090909,75.01818182,74.45454545,73.76363636,73.4,73.18181818,73.05454545,72.47272727,72.34545455,72.69090909,72.69090909,72.52727273,72.43636364,72.69090909,73.09090909,73.36363636,73.47272727,73.58181818,73.90909091,74.30909091,74.72727273,75.18181818,75.67272727,76.09090909,76.52727273,76.96363636,77.45454545,78.01818182,78.63636364,79.32727273,79.74545455,80.2,80.74545455,81.10909091,81.52727273,81.96363636,82.38181818,82.78181818,83.09090909,83.41818182,83.65454545,83.87272727,84.09090909,84.30909091,84.23636364,84.10909091,84.05454545,83.92727273,83.65454545,83.30909091,83.03636364,82.70909091,82.21818182,81.69090909,80.89090909,80.36363636,79.90909091,79.52727273,79.07272727,78.41818182,77.78181818,76.96363636,76.49090909,75.56363636,74.41818182,73.36363636,72.43636364,71.45454545,70.09090909,68.6,67.2,65.96363636,64.70909091,63.29090909,61.92727273,60.67272727,59.50909091,58.32727273,57.32727273,56.30909091,55.32727273,54.38181818,53.45454545,52.63636364,51.78181818,51.21818182,50.65454545,50.03636364,49.45454545,48.96363636,48.49090909,48.16363636,47.85454545,47.63636364,47.38181818,47.10909091,46.96363636,46.85454545,46.74545455];

  deepEqual(VowelWorm.convolve(m,y), VowelWorm.convolve(y,m), "Convolution ignores argument order.");
  deepEqual(VowelWorm.convolve(m,y).length, desired.length, "Convolution is the correct length.");
  deepEqual(VowelWorm.convolve(m,y).map(Math.round), desired.map(Math.round), "Convolution matches expected output.");
});

test( "smooth method", function() {
  var vowel = [198,201,188,225,255,255,244,170,224,253,248,208,168,222,240,225,170,179,220,227,201,163,201,228,224,184,172,205,222,206,177,187,221,229,204,198,211,237,236,207,199,223,238,223,201,202,229,238,215,187,202,227,228,207,201,220,240,236,216,205,203,210,199,174,166,167,169,158,155,158,165,160,149,148,144,138,136,133,131,129,131,134,126,122,130,125,125,122,123,128,124,116,109,119,125,117,108,113,118,116,118,118,114,113,115,108,102,117,126,119,115,117,126,127,130,130,134,137,139,152,149,141,152,164,171,169,168,172,180,182,175,164,151,152,150,148,149,145,138,130,143,143,142,135,135,139,141,151,150,145,148,147,154,153,148,152,147,131,124,110,97,94,88,88,99,115,129,129,126,125,127,130,126,119,121,121,121,122,122,107,108,115,119,108,108,111,107,111,106,110,110,116,119,113,104,115,125,128,133,129,120,107,110,113,117,110,113,121,126,121,110,99,97,107,117,121,118,124,125,123,121,118,115,114,116,111,116,121,127,125,125,126,128,131,129,123,118,115,105,114,106,98,96,95,96,85,78,69,63,40,37,42,42,45,42,35,26,28,36,45,46,47,48,44,45,51,53,62,65,59,48,41,55,47,40,46,60,65,64,70,82,84,82,78,86,81,82,93,103,106,104,106,111,115,107,96,93,87,86,92,92,91,95,88,72,57,52,64,61,53,54,55,54,56,56,55,65,65,64,64,74,74,73,69,63,74,80,78,78,68,84,95,91,82,84,86,86,81,86,87,76,82,91,95,82,91,100,89,91,95,86,87,84,75,62,64,61,57,51,45,40,37,35,24,30,31,30,21,27,24,29,25,23,32,34,22,30,37,41,37,27,30,27,23,26,22,15,8,3,0,5,12,10,13,19,15,13,23,24,21,30,42,49,49,45,54,66,66,60,59,65,70,69,59,72,69,79,79,72,77,78,84,82,77,81,93,96,97,93,93,102,103,100,102,102,98,99,100,96,95,99,92,96,101,91,96,105,108,100,103,111,115,113,105,96,106,100,96,88,100,104,98,98,90,84,86,88,77,74,80,89,82,74,74,76,76,69,75,81,81,81,88,91,93,87,92,93,83,83,81,86,85,81,87,85,89,85,77,64,74,81,73,65,72,79,70,59,60,63,69,68,60,58,64,64,54,60,49,40,54,48,46,52,55,50,50,43,40,43,48,50,47,56,63,56,62,73,62,57,76,75,78,73,75,79,77,80,74,69,74,86,89,88,83,82,86,85,76,66,73,76,76,71,71,70,64,51,48,59,61,53,50,65,73,73,73,71,68,71,89,96,94,83,83,86,87,90,91,91,86,83,88,85,79,90,85,86,89,94,82,79,90,102,105,99,96,102,102,99,110,112,103,94,97,107,105,99,99,89,82,79,84,88,95,102,100,97,101,101,101,91,72,72,76,74,64,59,59,58,54,57,52,55,65,65,60,57,64,67,65,60,63,68,65,61,63,59,63,59,65,82,83,85,85,88,92,94,108,113,104,107,105,101,93,95,97,89,92,93,92,108,102,106,100,95,99,96,98,96,92,93,93,86,87,87,89,84,82,85,84,84,81,73,86,96,99,98,94,96,106,112,116,107,112,104,102,101,90,89,89,92,87,78,74,69,71,59,60,64,56,69,81,86,82,87,84,90,95,89,88,94,102,106,102,93,92,105,109,109,99,102,105,101,108,110,110,113,108,116,116,113,104,100,105,106,105,100,94,103,98,90,93,107,108,96,84,92,93,95,97,98,95,93,88,83,91,90,82,84,94,97,89,99,104,99,94,95,103,92,92,99,99,104,99,101,101,100,107,104,97,103,105,106,107,103,97,89,92,97,96,90,90,97,91,91,98,94,87,82,72,77,80,76,81,75,73,75,70,68,66,68,64,59,51,51,60,60,60,60,57,59,64,68,64,58,57,42,62,63,59,57,57,60,58,59,63,57,63,67,66,58,54,48,50,58,59,55,64,74,71,71,74,85,88,87,76,81,88,101,104,104,95,91,95,107,107,103,93,92,104,108,103,91,91,97,92,78,85,91,89,84,79,76,77,79,79,76,76,70,65,66,66,69,64,64,58,54,60,58,61,64,60,54,54,58,58,60,67,70,67,63,73,80,77,72,79,82,78,77,79,85,96,86,77,73,70,83,79,84,65,85,97,85,82,84,98,101,91,83,85,97,98,99,95,92,89,90,93,91,95,92,92,83,83,91,84,83,78,77,80,75,78,80,82,79,75,69,73,74,65,64,63,63,59,52,56,52,57,52,52,45,47,44,39,39,34,34,27,31,30,23,19,14,15];
  var WINDOW_SIZE = 55;
  var ORDER = 1;
  var DERIVATIVE = 0;
  var desired = [191.09090909,191.65454545,192.27272727,192.14545455,192.41818182,193.38181818,194.,194.74545455,194.8,195.56363636,196.67272727,197.70909091,198.38181818,198.89090909,200.10909091,201.27272727,202.27272727,202.50909091,203.49090909,205.05454545,206.25454545,207.07272727,207.70909091,208.81818182,210.38181818,211.41818182,211.76363636,211.87272727,212.27272727,212.98181818,213.85454545,213.69090909,212.78181818,211.83636364,211.21818182,211.74545455,210.83636364,209.25454545,207.78181818,207.07272727,206.89090909,205.67272727,204.18181818,203.09090909,202.90909091,202.36363636,201.05454545,199.54545455,198.4,197.90909091,196.67272727,194.90909091,193.18181818,192.21818182,191.52727273,190.09090909,188.27272727,186.89090909,185.94545455,184.81818182,183.01818182,181.09090909,179.70909091,178.36363636,176.63636364,174.30909091,172.18181818,170.69090909,169.2,167.10909091,164.83636364,162.92727273,161.38181818,159.85454545,157.83636364,155.58181818,153.72727273,152.41818182,150.70909091,148.43636364,146.41818182,144.94545455,143.45454545,141.54545455,139.30909091,137.30909091,135.69090909,134.32727273,133.,131.61818182,130.49090909,129.85454545,129.6,129.27272727,128.76363636,128.65454545,128.81818182,129.05454545,129.12727273,129.27272727,129.69090909,130.27272727,130.96363636,131.63636364,132.14545455,132.47272727,132.85454545,133.23636364,133.54545455,133.81818182,134.16363636,134.45454545,134.45454545,134.78181818,135.10909091,135.47272727,135.69090909,135.81818182,136.09090909,136.54545455,137.30909091,137.87272727,138.23636364,138.8,139.50909091,140.25454545,140.89090909,141.47272727,142.09090909,142.61818182,142.92727273,143.12727273,143.03636364,142.83636364,142.69090909,142.16363636,141.47272727,141.10909091,141.10909091,141.32727273,141.38181818,141.36363636,141.27272727,141.21818182,141.14545455,140.94545455,140.58181818,140.01818182,139.50909091,139.14545455,138.6,137.83636364,136.67272727,135.56363636,134.6,133.63636364,132.32727273,130.98181818,129.81818182,128.78181818,128.05454545,127.21818182,126.49090909,125.8,125.2,124.72727273,124.27272727,123.8,123.29090909,122.96363636,122.70909091,122.67272727,122.56363636,122.21818182,121.6,120.85454545,120.18181818,119.67272727,118.98181818,118.36363636,117.76363636,117.27272727,116.78181818,116.01818182,115.14545455,114.52727273,114.21818182,114.34545455,114.78181818,115.21818182,115.87272727,116.54545455,116.98181818,117.09090909,116.89090909,116.63636364,116.41818182,116.25454545,115.96363636,115.70909091,115.61818182,115.76363636,115.83636364,115.90909091,116.,116.10909091,116.27272727,116.67272727,116.94545455,117.,116.92727273,116.87272727,116.98181818,116.89090909,116.72727273,116.45454545,116.25454545,116.,115.54545455,114.85454545,113.94545455,113.03636364,111.87272727,110.45454545,108.94545455,107.38181818,105.78181818,104.2,102.65454545,101.18181818,99.69090909,98.29090909,96.98181818,95.81818182,94.61818182,93.29090909,91.8,90.41818182,89.34545455,88.50909091,87.87272727,87.10909091,86.05454545,84.72727273,83.32727273,82.07272727,80.65454545,79.14545455,77.78181818,76.72727273,75.81818182,74.90909091,74.07272727,73.54545455,72.96363636,72.25454545,71.36363636,70.65454545,69.85454545,69.05454545,68.41818182,67.90909091,67.49090909,67.14545455,66.92727273,66.85454545,67.03636364,66.90909091,66.72727273,66.63636364,66.47272727,66.30909091,66.23636364,66.36363636,66.6,67.07272727,67.52727273,68.10909091,68.47272727,68.65454545,69.05454545,69.34545455,69.54545455,69.89090909,70.41818182,70.89090909,71.25454545,71.45454545,71.61818182,71.94545455,72.25454545,72.61818182,72.96363636,73.38181818,73.76363636,73.96363636,74.03636364,74.10909091,74.58181818,75.29090909,75.70909091,76.27272727,76.78181818,77.47272727,78.10909091,78.58181818,78.90909091,79.16363636,79.23636364,79.27272727,79.25454545,79.4,79.41818182,79.32727273,79.32727273,79.29090909,79.14545455,78.70909091,78.47272727,78.36363636,77.96363636,77.52727273,77.30909091,77.12727273,77.01818182,76.96363636,76.76363636,76.21818182,75.70909091,75.16363636,74.47272727,73.8,73.30909091,73.,72.72727273,72.2,71.52727273,71.10909091,70.69090909,70.23636364,69.63636364,69.10909091,68.52727273,68.05454545,67.32727273,66.56363636,65.98181818,65.43636364,64.49090909,63.69090909,63.03636364,62.52727273,62.05454545,61.2,60.29090909,59.36363636,58.36363636,57.6,56.47272727,55.01818182,53.50909091,52.07272727,50.54545455,49.07272727,47.72727273,46.43636364,45.10909091,43.87272727,42.76363636,41.50909091,40.27272727,38.98181818,37.87272727,36.76363636,35.70909091,34.98181818,34.21818182,33.30909091,32.72727273,32.34545455,32.01818182,31.74545455,31.69090909,31.70909091,31.87272727,32.09090909,32.23636364,32.72727273,33.25454545,34.01818182,34.81818182,35.69090909,36.54545455,37.4,38.38181818,39.49090909,40.4,41.43636364,42.6,43.89090909,45.23636364,46.34545455,47.41818182,48.87272727,50.2,51.34545455,52.45454545,53.63636364,54.92727273,56.18181818,57.50909091,58.83636364,60.09090909,61.49090909,62.89090909,64.49090909,66.27272727,67.92727273,69.58181818,71.27272727,73.05454545,74.63636364,76.16363636,77.90909091,79.76363636,81.4,82.87272727,84.23636364,85.61818182,86.67272727,87.52727273,88.23636364,89.23636364,90.14545455,90.72727273,91.30909091,91.85454545,92.30909091,92.69090909,93.01818182,93.16363636,93.43636364,93.58181818,93.94545455,94.,93.90909091,93.94545455,93.92727273,93.89090909,93.61818182,93.49090909,93.56363636,93.56363636,93.34545455,93.2,93.09090909,93.09090909,92.98181818,92.8,92.61818182,92.30909091,91.96363636,91.58181818,91.36363636,91.10909091,90.76363636,90.6,90.41818182,90.23636364,90.10909091,89.76363636,89.09090909,88.78181818,88.50909091,87.92727273,87.14545455,86.63636364,86.2,85.45454545,84.43636364,83.47272727,82.70909091,82.21818182,81.52727273,80.8,80.10909091,79.67272727,79.01818182,78.10909091,77.41818182,76.52727273,75.61818182,75.07272727,74.38181818,73.61818182,73.16363636,72.81818182,72.27272727,71.56363636,70.85454545,70.23636364,69.67272727,69.16363636,68.69090909,68.29090909,67.94545455,67.61818182,67.16363636,66.81818182,66.54545455,66.01818182,65.36363636,65.16363636,64.85454545,64.58181818,64.4,64.25454545,64.21818182,64.05454545,63.96363636,63.83636364,63.50909091,63.30909091,63.25454545,63.32727273,63.52727273,63.87272727,64.01818182,64.10909091,64.32727273,64.52727273,64.41818182,64.30909091,64.41818182,64.72727273,64.92727273,65.07272727,65.09090909,65.01818182,64.85454545,64.67272727,64.58181818,64.52727273,64.50909091,64.32727273,64.61818182,65.21818182,65.56363636,66.01818182,66.47272727,66.76363636,67.05454545,67.76363636,68.6,69.52727273,70.30909091,71.03636364,71.72727273,72.4,73.18181818,73.81818182,74.32727273,74.87272727,75.25454545,75.52727273,75.94545455,76.34545455,76.6,76.78181818,76.92727273,77.21818182,77.56363636,77.61818182,77.65454545,77.83636364,78.34545455,79.,79.45454545,79.63636364,79.87272727,80.12727273,80.41818182,80.92727273,81.4,81.72727273,82.05454545,82.61818182,83.23636364,83.76363636,84.18181818,84.69090909,85.01818182,85.23636364,85.50909091,86.10909091,86.83636364,87.49090909,88.23636364,89.09090909,89.94545455,90.6,91.10909091,91.61818182,91.94545455,91.96363636,92.03636364,92.12727273,91.85454545,91.27272727,90.63636364,90.2,89.74545455,89.16363636,88.61818182,87.92727273,87.27272727,86.8,86.41818182,86.,85.43636364,85.05454545,84.83636364,84.38181818,83.92727273,83.50909091,83.12727273,82.6,82.21818182,81.92727273,81.36363636,80.65454545,79.81818182,79.2,78.94545455,78.6,78.29090909,78.03636364,77.63636364,77.27272727,77.10909091,77.36363636,77.65454545,77.6,77.63636364,77.74545455,77.78181818,77.85454545,78.09090909,78.41818182,78.50909091,78.58181818,78.54545455,78.36363636,78.50909091,78.6,78.69090909,78.67272727,78.56363636,78.70909091,79.14545455,79.61818182,79.98181818,80.30909091,80.83636364,81.45454545,81.94545455,82.47272727,83.07272727,83.65454545,84.23636364,84.72727273,85.09090909,85.43636364,85.87272727,86.30909091,86.47272727,86.81818182,87.38181818,88.09090909,88.72727273,89.2,89.76363636,90.58181818,91.47272727,92.50909091,93.30909091,94.27272727,94.98181818,95.34545455,95.67272727,95.76363636,95.83636364,95.85454545,95.85454545,95.72727273,95.18181818,94.47272727,93.83636364,93.18181818,92.34545455,91.6,91.07272727,90.36363636,89.85454545,89.70909091,89.6,89.4,89.30909091,88.87272727,88.65454545,88.45454545,88.25454545,88.12727273,88.03636364,88.14545455,88.29090909,88.4,88.41818182,88.4,88.61818182,89.03636364,89.43636364,89.65454545,89.89090909,90.27272727,90.61818182,91.03636364,91.50909091,91.98181818,92.56363636,93.2,93.74545455,94.10909091,94.36363636,94.47272727,94.58181818,94.74545455,94.74545455,94.61818182,94.32727273,94.09090909,93.92727273,93.81818182,93.6,93.45454545,93.76363636,94.10909091,94.23636364,94.09090909,94.18181818,94.45454545,94.83636364,95.34545455,95.83636364,96.49090909,97.09090909,97.52727273,98.01818182,98.41818182,98.58181818,98.50909091,98.54545455,98.67272727,98.90909091,98.89090909,98.96363636,99.23636364,99.43636364,99.43636364,99.30909091,99.25454545,99.07272727,99.05454545,99.18181818,99.07272727,98.98181818,98.8,98.83636364,98.81818182,98.72727273,98.83636364,98.76363636,98.52727273,98.4,98.25454545,98.21818182,98.05454545,97.81818182,97.52727273,97.25454545,97.10909091,96.96363636,96.78181818,96.50909091,96.32727273,96.38181818,96.16363636,96.03636364,96.18181818,96.2,95.83636364,95.36363636,94.92727273,94.8,94.58181818,94.27272727,94.01818182,93.61818182,93.16363636,92.8,92.38181818,92.01818182,91.70909091,91.29090909,90.81818182,90.4,89.8,89.01818182,88.34545455,87.81818182,87.10909091,86.30909091,85.54545455,84.90909091,84.34545455,83.70909091,83.2,82.58181818,81.81818182,80.78181818,80.01818182,79.36363636,78.6,77.8,77.01818182,76.16363636,75.32727273,74.63636364,73.90909091,73.03636364,72.25454545,71.52727273,70.85454545,70.14545455,69.50909091,68.70909091,67.85454545,67.16363636,66.6,65.96363636,65.36363636,65.05454545,64.69090909,64.2,63.83636364,63.8,63.90909091,64.18181818,64.16363636,64.18181818,64.4,64.76363636,65.29090909,65.85454545,66.21818182,66.6,67.09090909,67.83636364,68.54545455,69.25454545,69.87272727,70.61818182,71.58181818,72.45454545,73.23636364,73.8,74.36363636,75.09090909,75.69090909,75.94545455,76.25454545,76.74545455,77.30909091,77.8,78.47272727,78.72727273,78.98181818,79.34545455,79.74545455,80.09090909,80.38181818,80.6,80.70909091,80.76363636,80.92727273,81.03636364,80.98181818,80.94545455,80.94545455,80.94545455,81.16363636,81.30909091,81.36363636,81.45454545,81.54545455,81.36363636,81.,80.76363636,80.52727273,80.27272727,79.94545455,79.61818182,79.25454545,79.01818182,78.87272727,78.72727273,78.29090909,77.70909091,77.25454545,77.01818182,76.78181818,76.45454545,75.94545455,75.54545455,75.41818182,75.29090909,75.01818182,74.45454545,73.76363636,73.4,73.18181818,73.05454545,72.47272727,72.34545455,72.69090909,72.69090909,72.52727273,72.43636364,72.69090909,73.09090909,73.36363636,73.47272727,73.58181818,73.90909091,74.30909091,74.72727273,75.18181818,75.67272727,76.09090909,76.52727273,76.96363636,77.45454545,78.01818182,78.63636364,79.32727273,79.74545455,80.2,80.74545455,81.10909091,81.52727273,81.96363636,82.38181818,82.78181818,83.09090909,83.41818182,83.65454545,83.87272727,84.09090909,84.30909091,84.23636364,84.10909091,84.05454545,83.92727273,83.65454545,83.30909091,83.03636364,82.70909091,82.21818182,81.69090909,80.89090909,80.36363636,79.90909091,79.52727273,79.07272727,78.41818182,77.78181818,76.96363636,76.49090909,75.56363636,74.41818182,73.36363636,72.43636364,71.45454545,70.09090909,68.6,67.2,65.96363636,64.70909091,63.29090909,61.92727273,60.67272727,59.50909091,58.32727273,57.32727273,56.30909091,55.32727273,54.38181818,53.45454545,52.63636364,51.78181818,51.21818182,50.65454545,50.03636364,49.45454545,48.96363636,48.49090909,48.16363636,47.85454545,47.63636364,47.38181818,47.10909091,46.96363636,46.85454545,46.74545455];
  var result = VowelWorm.smoothCurve(vowel, WINDOW_SIZE, ORDER);
  var uint8result = VowelWorm.smoothCurve(new Uint8Array(vowel), WINDOW_SIZE, ORDER);

  deepEqual(result.map(Math.round), desired.map(Math.round), "Smoothing matches expected.");
  deepEqual(uint8result.map(Math.round), desired.map(Math.round), "Smoothing works with unsigned array.");
});

/*************************/

module( "peak finding" );

test( "simple array", function() {
  var data = [0,10,0,0,10,0],
      expected = [1,4];
  deepEqual(VowelWorm.getPeaks(data), expected);
});

test( "typed array", function() {
  var data = new Uint8Array([0,10,0,0,10,0]),
      expected = [1,4];
  deepEqual(VowelWorm.getPeaks(data), expected);
});

test( "starts high", function() {
  var data = [255,0,0,0,0],
      expected = [0];
  deepEqual(VowelWorm.getPeaks(data), expected);
});

test( "ends high", function() {
  var data = [0,0,255],
      expected = [2];
  deepEqual(VowelWorm.getPeaks(data), expected);
});

test( "no peaks", function() {
  var data = [0,0,0,0,0],
      expected = [];
  deepEqual(VowelWorm.getPeaks(data), expected);
});


var LEEWAY = 300; // amount to forgive, in Hz
module( "vs. Wavesurfer's LPC" );

test( "ae", function() {
  var worm = new VowelWorm.instance( "audio/ae.wav" );
  var expected = [764, 1763, 3326];
  worm.setTime(worm.duration/2);
  var formants = worm.getFormants();
  close(formants[0], expected[0], LEEWAY, "F1 doesn't match");
  close(formants[1], expected[1], LEEWAY, "F2 doesn't match");
  close(formants[2], expected[2], LEEWAY, "F3 doesn't match");
});
