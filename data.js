var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama2",
      "name": "panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4087,
      "initialViewParameters": {
        "yaw": -1.3270745053102893,
        "pitch": 0.007739530668711581,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.8253270549900371,
          "pitch": 0.05983807810027564,
          "rotation": 0,
          "target": "1-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama1",
      "name": "panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.3821998663590644,
        "pitch": 0.02203722532927621,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -2.3821998663590644,
          "pitch": 0.02203722532927621,
          "rotation": 0,
          "target": "0-panorama2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Comuna Sevan",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
