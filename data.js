var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso",
      "name": "ingreso",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.058402684863018806,
          "pitch": 0.30820406961732516,
          "rotation": 0,
          "target": "2-living-comedor"
        },
        {
          "yaw": 1.3454700829746251,
          "pitch": 0.11557657361206708,
          "rotation": 0,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "cocina",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9873159624357832,
        "pitch": 0.5162842970306052,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": 3.0324635616017517,
          "pitch": 0.26890960825526555,
          "rotation": 0,
          "target": "0-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-comedor",
      "name": "living comedor",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1269766769789857,
          "pitch": 0.2039140924535694,
          "rotation": 0,
          "target": "0-ingreso"
        },
        {
          "yaw": -0.055148157401575304,
          "pitch": 0.16885509089613926,
          "rotation": 0,
          "target": "3-living-comedor-ii"
        },
        {
          "yaw": -1.205093720163374,
          "pitch": 0.13438432240085163,
          "rotation": 0,
          "target": "5-igreso-a-bao-y-habitacion-ii-iv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-comedor-ii",
      "name": "living comedor II",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.446969061848165,
          "pitch": 0.1883402137300454,
          "rotation": 0,
          "target": "4-habitacin-i"
        },
        {
          "yaw": -2.6921354125418286,
          "pitch": 0.14371634724695959,
          "rotation": 0,
          "target": "5-igreso-a-bao-y-habitacion-ii-iv"
        },
        {
          "yaw": 2.63464530419661,
          "pitch": 0.3581485637707402,
          "rotation": 0,
          "target": "2-living-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-habitacin-i",
      "name": "habitación I",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0582665104534303,
        "pitch": 0.47954773990723254,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": 2.9300535362309112,
          "pitch": 0.2679490383345886,
          "rotation": 0,
          "target": "3-living-comedor-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-igreso-a-bao-y-habitacion-ii-iv",
      "name": "igreso a baño y habitacion iI IV",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1116441478348591,
          "pitch": 0.06315187489740026,
          "rotation": 0,
          "target": "7-habitacion-ii"
        },
        {
          "yaw": 0.43797836083147246,
          "pitch": 0.08296634452415752,
          "rotation": 0.7853981633974483,
          "target": "6-bao"
        },
        {
          "yaw": -2.852218583881781,
          "pitch": 0.16871164321878496,
          "rotation": 0,
          "target": "2-living-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "baño",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5625797236756132,
        "pitch": 0.5095114418501758,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -2.5754326251165303,
          "pitch": 0.16801881183257628,
          "rotation": 0,
          "target": "5-igreso-a-bao-y-habitacion-ii-iv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacion-ii",
      "name": "habitacion II",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7099747959609282,
        "pitch": 0.4174852491238905,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -3.1332150881165344,
          "pitch": 0.22912487814147475,
          "rotation": 0,
          "target": "5-igreso-a-bao-y-habitacion-ii-iv"
        },
        {
          "yaw": 0.1606134955965839,
          "pitch": 0.318854777612394,
          "rotation": 0,
          "target": "8-balcon-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balcon-",
      "name": "balcon ",
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
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.492190716932404,
        "pitch": 0.11750091735634527,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": 2.545263281640443,
          "pitch": 0.21296211996825143,
          "rotation": 0,
          "target": "7-habitacion-ii"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Italia y Urquiza tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
