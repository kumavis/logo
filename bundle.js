(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const colorSeed=Math.floor(1e5*Math.random());document.addEventListener("keypress",function(e){if(99===e.keyCode){download('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg width="521px" height="521px" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events">'+document.querySelector("svg").innerHTML+"</svg>",`custom-fox-${colorSeed}.svg`,"image/svg+xml")}});var createViewer=require("../index"),viewer=createViewer({width:.4,height:.4,followMouse:!0,followMotion:!0,colorSeed:colorSeed});function download(e,o,t){var n=new Blob([e],{type:t});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,o);else{var r=document.createElement("a"),d=URL.createObjectURL(n);r.href=d,r.download=o,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(d)},0)}}document.body.appendChild(viewer.container);

},{"../index":3}],2:[function(require,module,exports){
module.exports={
  "positions": [
    [
      111.0246,
      52.6046,
      46.2259
    ],
    [
      114.025,
      87.6733,
      58.9818
    ],
    [
      66.192,
      80.898,
      55.3943
    ],
    [
      72.1133,
      35.4918,
      30.8714
    ],
    [
      97.8045,
      116.561,
      73.9788
    ],
    [
      16.7623,
      58.0109,
      58.0782
    ],
    [
      52.6089,
      30.3641,
      42.5561
    ],
    [
      106.8814,
      31.9455,
      46.9133
    ],
    [
      113.4846,
      38.6049,
      49.1215
    ],
    [
      108.6633,
      43.2332,
      46.3154
    ],
    [
      101.2166,
      15.9822,
      46.3082
    ],
    [
      16.6605,
      -16.2883,
      93.6187
    ],
    [
      40.775,
      -10.2288,
      85.2764
    ],
    [
      23.9269,
      -2.5103,
      86.7365
    ],
    [
      11.1691,
      -7.0037,
      99.3776
    ],
    [
      9.5692,
      -34.3939,
      141.672
    ],
    [
      12.596,
      7.1655,
      88.741
    ],
    [
      61.1809,
      8.8142,
      76.9968
    ],
    [
      39.7195,
      -28.9271,
      88.9638
    ],
    [
      13.7962,
      -68.5757,
      132.057
    ],
    [
      15.2674,
      -62.32,
      129.688
    ],
    [
      14.8446,
      -52.6096,
      140.113
    ],
    [
      12.8917,
      -49.7716,
      144.741
    ],
    [
      35.6042,
      -71.758,
      81.0639
    ],
    [
      47.4625,
      -68.6061,
      63.3697
    ],
    [
      38.2486,
      -64.7302,
      38.9099
    ],
    [
      -12.8917,
      -49.7716,
      144.741
    ],
    [
      -13.7962,
      -68.5757,
      132.057
    ],
    [
      17.8021,
      -71.758,
      81.0639
    ],
    [
      19.1243,
      -69.0168,
      49.4201
    ],
    [
      38.2486,
      -66.2756,
      17.7762
    ],
    [
      12.8928,
      -36.7035,
      141.672
    ],
    [
      109.284,
      -93.5899,
      27.8243
    ],
    [
      122.118,
      -36.8894,
      35.025
    ],
    [
      67.7668,
      -30.197,
      78.4178
    ],
    [
      33.1807,
      101.852,
      25.3186
    ],
    [
      9.4063,
      -35.5898,
      150.722
    ],
    [
      -9.5692,
      -34.3939,
      141.672
    ],
    [
      -9.4063,
      -35.5898,
      150.722
    ],
    [
      11.4565,
      -37.8994,
      150.722
    ],
    [
      -12.596,
      7.1655,
      88.741
    ],
    [
      -11.1691,
      -7.0037,
      99.3776
    ],
    [
      70.2365,
      62.8362,
      -3.9475
    ],
    [
      47.2634,
      54.294,
      -27.4148
    ],
    [
      28.7302,
      91.7311,
      -24.9726
    ],
    [
      69.1676,
      6.5862,
      -12.7757
    ],
    [
      28.7302,
      49.1003,
      -48.3596
    ],
    [
      31.903,
      5.692,
      -47.822
    ],
    [
      35.0758,
      -34.4329,
      -16.2809
    ],
    [
      115.2841,
      48.6815,
      48.6841
    ],
    [
      110.8428,
      28.4821,
      49.1762
    ],
    [
      -19.1243,
      -69.0168,
      49.4201
    ],
    [
      -38.2486,
      -66.2756,
      17.7762
    ],
    [
      -111.0246,
      52.6046,
      46.2259
    ],
    [
      -72.1133,
      35.4918,
      30.8714
    ],
    [
      -66.192,
      80.898,
      55.3943
    ],
    [
      -114.025,
      87.6733,
      58.9818
    ],
    [
      -97.8045,
      116.561,
      73.9788
    ],
    [
      -52.6089,
      30.3641,
      42.5561
    ],
    [
      -16.7623,
      58.0109,
      58.0782
    ],
    [
      -106.8814,
      31.9455,
      46.9133
    ],
    [
      -108.6633,
      43.2332,
      46.3154
    ],
    [
      -113.4846,
      38.6049,
      49.1215
    ],
    [
      -101.2166,
      15.9822,
      46.3082
    ],
    [
      -16.6605,
      -16.2883,
      93.6187
    ],
    [
      -23.9269,
      -2.5103,
      86.7365
    ],
    [
      -40.775,
      -10.2288,
      85.2764
    ],
    [
      -61.1809,
      8.8142,
      76.9968
    ],
    [
      -39.7195,
      -28.9271,
      88.9638
    ],
    [
      -14.8446,
      -52.6096,
      140.113
    ],
    [
      -15.2674,
      -62.32,
      129.688
    ],
    [
      -47.4625,
      -68.6061,
      63.3697
    ],
    [
      -35.6042,
      -71.758,
      81.0639
    ],
    [
      -38.2486,
      -64.7302,
      38.9099
    ],
    [
      -17.8021,
      -71.758,
      81.0639
    ],
    [
      -12.8928,
      -36.7035,
      141.672
    ],
    [
      -67.7668,
      -30.197,
      78.4178
    ],
    [
      -122.118,
      -36.8894,
      35.025
    ],
    [
      -109.284,
      -93.5899,
      27.8243
    ],
    [
      -33.1807,
      101.852,
      25.3186
    ],
    [
      -11.4565,
      -37.8994,
      150.722
    ],
    [
      -70.2365,
      62.8362,
      -3.9475
    ],
    [
      -28.7302,
      91.7311,
      -24.9726
    ],
    [
      -47.2634,
      54.294,
      -27.4148
    ],
    [
      -69.1676,
      6.5862,
      -12.7757
    ],
    [
      -28.7302,
      49.1003,
      -48.3596
    ],
    [
      -31.903,
      5.692,
      -47.822
    ],
    [
      -35.0758,
      -34.4329,
      -16.2809
    ],
    [
      -115.2841,
      48.6815,
      48.6841
    ],
    [
      -110.8428,
      28.4821,
      49.1762
    ]
  ],
  "chunks": [
    {
      "color": [
        246,
        133,
        27
      ],
      "faces": [
        [
          17,
          33,
          10
        ],
        [
          17,
          18,
          34
        ],
        [
          34,
          33,
          17
        ],
        [
          10,
          6,
          17
        ],
        [
          11,
          15,
          31
        ],
        [
          31,
          18,
          11
        ],
        [
          18,
          12,
          11
        ],
        [
          14,
          16,
          40
        ],
        [
          40,
          41,
          14
        ],
        [
          59,
          5,
          35
        ],
        [
          35,
          79,
          59
        ],
        [
          67,
          63,
          77
        ],
        [
          67,
          77,
          76
        ],
        [
          76,
          68,
          67
        ],
        [
          63,
          67,
          58
        ],
        [
          64,
          68,
          75
        ],
        [
          75,
          37,
          64
        ],
        [
          68,
          64,
          66
        ],
        [
          14,
          41,
          37
        ],
        [
          37,
          15,
          14
        ],
        [
          5,
          59,
          40
        ],
        [
          40,
          16,
          5
        ]
      ]
    },
    {
      "color": [
        228,
        118,
        27
      ],
      "faces": [
        [
          31,
          24,
          18
        ],
        [
          6,
          5,
          16
        ],
        [
          16,
          17,
          6
        ],
        [
          24,
          32,
          33
        ],
        [
          33,
          34,
          24
        ],
        [
          5,
          4,
          35
        ],
        [
          75,
          68,
          71
        ],
        [
          58,
          67,
          40
        ],
        [
          40,
          59,
          58
        ],
        [
          71,
          76,
          77
        ],
        [
          77,
          78,
          71
        ]
      ]
    },
    {
      "color": [
        118,
        61,
        22
      ],
      "faces": [
        [
          0,
          1,
          2
        ],
        [
          2,
          3,
          0
        ],
        [
          4,
          5,
          2
        ],
        [
          6,
          3,
          2
        ],
        [
          2,
          5,
          6
        ],
        [
          7,
          8,
          9
        ],
        [
          10,
          3,
          6
        ],
        [
          10,
          50,
          7
        ],
        [
          7,
          3,
          10
        ],
        [
          7,
          9,
          3
        ],
        [
          49,
          0,
          9
        ],
        [
          3,
          9,
          0
        ],
        [
          53,
          54,
          55
        ],
        [
          55,
          56,
          53
        ],
        [
          57,
          56,
          55
        ],
        [
          58,
          59,
          55
        ],
        [
          55,
          54,
          58
        ],
        [
          60,
          61,
          62
        ],
        [
          63,
          58,
          54
        ],
        [
          63,
          60,
          89
        ],
        [
          60,
          63,
          54
        ],
        [
          60,
          54,
          61
        ],
        [
          88,
          61,
          53
        ],
        [
          54,
          53,
          61
        ],
        [
          2,
          1,
          4
        ],
        [
          55,
          59,
          57
        ]
      ]
    },
    {
      "color": [
        22,
        22,
        22
      ],
      "faces": [
        [
          36,
          15,
          37
        ],
        [
          37,
          38,
          36
        ],
        [
          31,
          39,
          22
        ],
        [
          22,
          21,
          31
        ],
        [
          31,
          15,
          36
        ],
        [
          36,
          39,
          31
        ],
        [
          75,
          69,
          26
        ],
        [
          26,
          80,
          75
        ],
        [
          75,
          80,
          38
        ],
        [
          38,
          37,
          75
        ],
        [
          38,
          80,
          39
        ],
        [
          39,
          36,
          38
        ],
        [
          39,
          80,
          26
        ],
        [
          26,
          22,
          39
        ]
      ]
    },
    {
      "color": [
        215,
        193,
        179
      ],
      "faces": [
        [
          21,
          20,
          24
        ],
        [
          24,
          31,
          21
        ],
        [
          69,
          71,
          70
        ],
        [
          71,
          69,
          75
        ]
      ]
    },
    {
      "color": [
        192,
        173,
        158
      ],
      "faces": [
        [
          19,
          20,
          21
        ],
        [
          21,
          22,
          19
        ],
        [
          20,
          19,
          23
        ],
        [
          23,
          24,
          20
        ],
        [
          23,
          25,
          24
        ],
        [
          19,
          22,
          26
        ],
        [
          26,
          27,
          19
        ],
        [
          23,
          28,
          29
        ],
        [
          23,
          29,
          30
        ],
        [
          25,
          23,
          30
        ],
        [
          29,
          51,
          52
        ],
        [
          52,
          30,
          29
        ],
        [
          27,
          26,
          69
        ],
        [
          69,
          70,
          27
        ],
        [
          70,
          71,
          72
        ],
        [
          72,
          27,
          70
        ],
        [
          72,
          71,
          73
        ],
        [
          51,
          74,
          72
        ],
        [
          52,
          51,
          72
        ],
        [
          73,
          52,
          72
        ],
        [
          19,
          27,
          74
        ],
        [
          74,
          28,
          19
        ],
        [
          51,
          29,
          28
        ],
        [
          28,
          74,
          51
        ],
        [
          74,
          27,
          72
        ],
        [
          28,
          23,
          19
        ]
      ]
    },
    {
      "color": [
        205,
        97,
        22
      ],
      "faces": [
        [
          24,
          34,
          18
        ],
        [
          16,
          13,
          12
        ],
        [
          12,
          17,
          16
        ],
        [
          13,
          16,
          11
        ],
        [
          71,
          68,
          76
        ],
        [
          40,
          67,
          66
        ],
        [
          66,
          65,
          40
        ],
        [
          65,
          64,
          40
        ]
      ]
    },
    {
      "color": [
        35,
        52,
        71
      ],
      "faces": [
        [
          11,
          12,
          13
        ],
        [
          64,
          65,
          66
        ]
      ]
    },
    {
      "color": [
        228,
        117,
        31
      ],
      "faces": [
        [
          14,
          15,
          11
        ],
        [
          11,
          16,
          14
        ],
        [
          17,
          12,
          18
        ],
        [
          41,
          64,
          37
        ],
        [
          67,
          68,
          66
        ]
      ]
    },
    {
      "color": [
        226,
        118,
        27
      ],
      "faces": [
        [
          35,
          4,
          42
        ],
        [
          4,
          1,
          42
        ],
        [
          42,
          43,
          44
        ],
        [
          44,
          35,
          42
        ],
        [
          45,
          43,
          42
        ],
        [
          42,
          10,
          45
        ],
        [
          30,
          32,
          24
        ],
        [
          24,
          25,
          30
        ],
        [
          30,
          33,
          32
        ],
        [
          33,
          30,
          10
        ],
        [
          44,
          43,
          46
        ],
        [
          43,
          45,
          47
        ],
        [
          47,
          46,
          43
        ],
        [
          48,
          47,
          45
        ],
        [
          45,
          30,
          48
        ],
        [
          30,
          45,
          10
        ],
        [
          49,
          42,
          0
        ],
        [
          8,
          7,
          42
        ],
        [
          50,
          42,
          7
        ],
        [
          50,
          10,
          42
        ],
        [
          1,
          0,
          42
        ],
        [
          42,
          9,
          8
        ],
        [
          42,
          49,
          9
        ],
        [
          64,
          41,
          40
        ],
        [
          57,
          59,
          79
        ],
        [
          79,
          81,
          57
        ],
        [
          57,
          81,
          56
        ],
        [
          82,
          79,
          35
        ],
        [
          35,
          44,
          82
        ],
        [
          81,
          79,
          82
        ],
        [
          82,
          83,
          81
        ],
        [
          84,
          63,
          81
        ],
        [
          81,
          83,
          84
        ],
        [
          44,
          46,
          85
        ],
        [
          85,
          82,
          44
        ],
        [
          52,
          73,
          71
        ],
        [
          71,
          78,
          52
        ],
        [
          52,
          78,
          77
        ],
        [
          77,
          63,
          52
        ],
        [
          82,
          85,
          83
        ],
        [
          83,
          85,
          86
        ],
        [
          86,
          84,
          83
        ],
        [
          87,
          52,
          84
        ],
        [
          84,
          86,
          87
        ],
        [
          52,
          63,
          84
        ],
        [
          88,
          53,
          81
        ],
        [
          62,
          81,
          60
        ],
        [
          89,
          60,
          81
        ],
        [
          89,
          81,
          63
        ],
        [
          56,
          81,
          53
        ],
        [
          81,
          62,
          61
        ],
        [
          81,
          61,
          88
        ],
        [
          48,
          87,
          86
        ],
        [
          86,
          47,
          48
        ],
        [
          47,
          86,
          85
        ],
        [
          85,
          46,
          47
        ],
        [
          48,
          30,
          52
        ],
        [
          52,
          87,
          48
        ]
      ]
    }
  ]
}

},{}],3:[function(require,module,exports){
var perspective=require("gl-mat4/perspective"),multiply=require("gl-mat4/multiply"),lookAt=require("gl-mat4/lookAt"),invert=require("gl-mat4/invert"),rotate=require("gl-mat4/rotate"),transform=require("gl-vec3/transformMat4"),foxJSON=require("./fox.json"),colors=["#01888C","#FC7500","#034F5D","#F73F01","#FC1960","#C7144C","#F3C100","#1598F2","#2465E1","#F19E02"],MersenneTwister=require("mersenne-twister"),SVG_NS="http://www.w3.org/2000/svg";function createNode(t){return document.createElementNS(SVG_NS,t)}function setAttribute(t,e,n){t.setAttributeNS(null,e,n)}module.exports=function(t){var e,n=t||{},r=!!n.followMouse,o=!!n.followMotion,i=!!n.slowDrift,a=n.colorSeed;a&&(e=new MersenneTwister(a));var l=!0,s=[0,0],u=.3,h=n.width||400,f=n.height||400,c=createNode("svg"),d={x:0,y:0},w=foxJSON.positions.length,v=new Float32Array(3*w),g=new Float32Array(3*w),m=[];function p(t){var e=c.getBoundingClientRect();d.x=1-2*(t.x-e.left)/e.width,d.y=1-2*(t.y-e.top)/e.height}function A(t,e){this.svg=t,this.indices=e,this.zIndex=0}n.pxNotRatio||(h=window.innerWidth*(n.width||.25)|0,f=0|(window.innerHeight*n.height||h),"minWidth"in n&&h<n.minWidth&&(h=n.minWidth,f=n.minWidth*n.height/n.width|0)),setAttribute(c,"width",h+"px"),setAttribute(c,"height",f+"px"),document.body.appendChild(c),function(){for(var t=foxJSON.positions,e=0,n=0;n<t.length;++n)for(var r=t[n],o=0;o<3;++o)v[e++]=r[o]}();var y=function(){for(var t=[],n=0;n<foxJSON.chunks.length;++n){var r,o=foxJSON.chunks[n];r=e?colors[Math.floor(e.random()*colors.length)]:"rgb("+o.color+")";for(var i=o.faces,a=0;a<i.length;++a){var l=i[a],s=createNode("polygon");setAttribute(s,"fill",r),setAttribute(s,"stroke",r),setAttribute(s,"points","0,0, 10,0, 0,10"),c.appendChild(s),t.push(new A(s,l))}}return t}(),F=function(){var t=new Float32Array(3),e=new Float32Array([0,1,0]),n=new Float32Array(16),r=new Float32Array(16),o=lookAt(new Float32Array(16),new Float32Array([0,0,400]),t,e),a=invert(new Float32Array(16),o),l=new Float32Array(16),u=new Float32Array(3),h=new Float32Array(16),f=new Float32Array([1,0,0]),d=new Float32Array([0,1,0]),w=new Float32Array([0,0,1]);return function(){var v=c.getBoundingClientRect(),g=v.width,m=v.height;if(perspective(n,Math.PI/4,g/m,100,1e3),invert(l,n),u[0]=s[0],u[1]=s[1],u[2]=1.2,transform(u,u,l),transform(u,u,a),lookAt(r,t,u,e),i){var p=Date.now()/1e3;rotate(r,r,.1+.2*Math.sin(p/3),f),rotate(r,r,.03*Math.sin(p/2)-.1,w),rotate(r,r,.5+.2*Math.sin(p/3),d)}return multiply(h,n,o),multiply(h,h,r),h}}();function x(t,e){return e.zIndex-t.zIndex}function M(){l=!1}function N(){l=!0}function C(){if(l){window.requestAnimationFrame(C);var t=1-u;c.getBoundingClientRect();s[0]=t*s[0]+u*d.x,s[1]=t*s[1]+u*d.y+.085,!function(t){for(var e=t[0],n=t[1],r=t[2],o=t[3],i=t[4],a=t[5],l=t[6],s=t[7],u=t[8],h=t[9],f=t[10],c=t[11],d=t[12],m=t[13],p=t[14],A=t[15],y=0;y<w;++y){var F=v[3*y],x=v[3*y+1],M=v[3*y+2],N=F*o+x*s+M*c+A;g[3*y]=(F*e+x*i+M*u+d)/N,g[3*y+1]=(F*n+x*a+M*h+m)/N,g[3*y+2]=(F*r+x*l+M*f+p)/N}}(F()),function(){var t,e=c.getBoundingClientRect(),n=e.width,r=e.height;for(m.length=0,t=0;t<y.length;++t){var o=y[t],i=o.indices,a=i[0],l=i[1],s=i[2],u=g[3*a],h=g[3*a+1],f=g[3*l],d=g[3*l+1],w=g[3*s];if(!((f-u)*(g[3*s+1]-h)-(d-h)*(w-u)<0)){for(var v=[],p=-1/0,A=1/0,F=o.svg,M=0;M<3;++M){var N=i[M];v.push(.5*n*(1-g[3*N])+","+.5*r*(1-g[3*N+1]));var C=g[3*N+2];p=Math.max(p,C),A=Math.min(A,C)}o.zIndex=p+.25*A;var S=v.join(" ");-1===S.indexOf("NaN")&&setAttribute(F,"points",S),m.push(o)}}for(m.sort(x),c.innerHTML="",t=0;t<m.length;++t)c.appendChild(m[t].svg)}(),M()}}return window.addEventListener("mousemove",function(t){l||N(),r&&(p({x:t.clientX,y:t.clientY}),C())}),window.addEventListener("deviceorientation",function(t){if(l||N(),o){const e=10;p({x:200+t.gamma*e,y:-300+t.beta*e}),C()}}),C(),{container:c,lookAt:p,setFollowMouse:function(t){r=t},setFollowMotion:function(t){o=t},stopAnimation:M,startAnimation:N}};

},{"./fox.json":2,"gl-mat4/invert":5,"gl-mat4/lookAt":6,"gl-mat4/multiply":7,"gl-mat4/perspective":8,"gl-mat4/rotate":9,"gl-vec3/transformMat4":10,"mersenne-twister":11}],4:[function(require,module,exports){
function identity(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}module.exports=identity;

},{}],5:[function(require,module,exports){
function invert(n,r){var e=r[0],t=r[1],u=r[2],i=r[3],l=r[4],o=r[5],v=r[6],a=r[7],c=r[8],d=r[9],f=r[10],m=r[11],p=r[12],s=r[13],x=r[14],b=r[15],g=e*o-t*l,h=e*v-u*l,j=e*a-i*l,k=t*v-u*o,q=t*a-i*o,w=u*a-i*v,y=c*s-d*p,z=c*x-f*p,A=c*b-m*p,B=d*x-f*s,C=d*b-m*s,D=f*b-m*x,E=g*D-h*C+j*B+k*A-q*z+w*y;return E?(E=1/E,n[0]=(o*D-v*C+a*B)*E,n[1]=(u*C-t*D-i*B)*E,n[2]=(s*w-x*q+b*k)*E,n[3]=(f*q-d*w-m*k)*E,n[4]=(v*A-l*D-a*z)*E,n[5]=(e*D-u*A+i*z)*E,n[6]=(x*j-p*w-b*h)*E,n[7]=(c*w-f*j+m*h)*E,n[8]=(l*C-o*A+a*y)*E,n[9]=(t*A-e*C-i*y)*E,n[10]=(p*q-s*j+b*g)*E,n[11]=(d*j-c*q-m*g)*E,n[12]=(o*z-l*B-v*y)*E,n[13]=(e*B-t*z+u*y)*E,n[14]=(s*h-p*k-x*g)*E,n[15]=(c*k-d*h+f*g)*E,n):null}module.exports=invert;

},{}],6:[function(require,module,exports){
var identity=require("./identity");function lookAt(t,a,e,r){var i,o,s,h,n,M,d,q,u,b,l=a[0],y=a[1],k=a[2],v=r[0],A=r[1],c=r[2],f=e[0],m=e[1],p=e[2];return Math.abs(l-f)<1e-6&&Math.abs(y-m)<1e-6&&Math.abs(k-p)<1e-6?identity(t):(d=l-f,q=y-m,u=k-p,i=A*(u*=b=1/Math.sqrt(d*d+q*q+u*u))-c*(q*=b),o=c*(d*=b)-v*u,s=v*q-A*d,(b=Math.sqrt(i*i+o*o+s*s))?(i*=b=1/b,o*=b,s*=b):(i=0,o=0,s=0),h=q*s-u*o,n=u*i-d*s,M=d*o-q*i,(b=Math.sqrt(h*h+n*n+M*M))?(h*=b=1/b,n*=b,M*=b):(h=0,n=0,M=0),t[0]=i,t[1]=h,t[2]=d,t[3]=0,t[4]=o,t[5]=n,t[6]=q,t[7]=0,t[8]=s,t[9]=M,t[10]=u,t[11]=0,t[12]=-(i*l+o*y+s*k),t[13]=-(h*l+n*y+M*k),t[14]=-(d*l+q*y+u*k),t[15]=1,t)}module.exports=lookAt;

},{"./identity":4}],7:[function(require,module,exports){
function multiply(l,t,u){var r=t[0],e=t[1],i=t[2],m=t[3],n=t[4],o=t[5],p=t[6],y=t[7],a=t[8],c=t[9],d=t[10],f=t[11],s=t[12],v=t[13],x=t[14],b=t[15],g=u[0],h=u[1],j=u[2],k=u[3];return l[0]=g*r+h*n+j*a+k*s,l[1]=g*e+h*o+j*c+k*v,l[2]=g*i+h*p+j*d+k*x,l[3]=g*m+h*y+j*f+k*b,g=u[4],h=u[5],j=u[6],k=u[7],l[4]=g*r+h*n+j*a+k*s,l[5]=g*e+h*o+j*c+k*v,l[6]=g*i+h*p+j*d+k*x,l[7]=g*m+h*y+j*f+k*b,g=u[8],h=u[9],j=u[10],k=u[11],l[8]=g*r+h*n+j*a+k*s,l[9]=g*e+h*o+j*c+k*v,l[10]=g*i+h*p+j*d+k*x,l[11]=g*m+h*y+j*f+k*b,g=u[12],h=u[13],j=u[14],k=u[15],l[12]=g*r+h*n+j*a+k*s,l[13]=g*e+h*o+j*c+k*v,l[14]=g*i+h*p+j*d+k*x,l[15]=g*m+h*y+j*f+k*b,l}module.exports=multiply;

},{}],8:[function(require,module,exports){
function perspective(e,t,r,p,n){var a=1/Math.tan(t/2),c=1/(p-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+p)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*p*c,e[15]=0,e}module.exports=perspective;

},{}],9:[function(require,module,exports){
function rotate(t,a,r,e){var o,n,s,h,u,M,l,c,i,b,d,f,m,p,q,v,x,g,j,k,w,y,z,A,B=e[0],C=e[1],D=e[2],E=Math.sqrt(B*B+C*C+D*D);return Math.abs(E)<1e-6?null:(B*=E=1/E,C*=E,D*=E,o=Math.sin(r),s=1-(n=Math.cos(r)),h=a[0],u=a[1],M=a[2],l=a[3],c=a[4],i=a[5],b=a[6],d=a[7],f=a[8],m=a[9],p=a[10],q=a[11],v=B*B*s+n,x=C*B*s+D*o,g=D*B*s-C*o,j=B*C*s-D*o,k=C*C*s+n,w=D*C*s+B*o,y=B*D*s+C*o,z=C*D*s-B*o,A=D*D*s+n,t[0]=h*v+c*x+f*g,t[1]=u*v+i*x+m*g,t[2]=M*v+b*x+p*g,t[3]=l*v+d*x+q*g,t[4]=h*j+c*k+f*w,t[5]=u*j+i*k+m*w,t[6]=M*j+b*k+p*w,t[7]=l*j+d*k+q*w,t[8]=h*y+c*z+f*A,t[9]=u*y+i*z+m*A,t[10]=M*y+b*z+p*A,t[11]=l*y+d*z+q*A,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t)}module.exports=rotate;

},{}],10:[function(require,module,exports){
function transformMat4(r,t,a){var n=t[0],o=t[1],e=t[2],f=a[3]*n+a[7]*o+a[11]*e+a[15];return f=f||1,r[0]=(a[0]*n+a[4]*o+a[8]*e+a[12])/f,r[1]=(a[1]*n+a[5]*o+a[9]*e+a[13])/f,r[2]=(a[2]*n+a[6]*o+a[10]*e+a[14])/f,r}module.exports=transformMat4;

},{}],11:[function(require,module,exports){
var MersenneTwister=function(t){null==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};MersenneTwister.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++){t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0}},MersenneTwister.prototype.init_by_array=function(t,i){var s,h,n;for(this.init_seed(19650218),s=1,h=0,n=this.N>i?this.N:i;n;n--){var r=this.mt[s-1]^this.mt[s-1]>>>30;this.mt[s]=(this.mt[s]^(1664525*((4294901760&r)>>>16)<<16)+1664525*(65535&r))+t[h]+h,this.mt[s]>>>=0,h++,++s>=this.N&&(this.mt[0]=this.mt[this.N-1],s=1),h>=i&&(h=0)}for(n=this.N-1;n;n--){r=this.mt[s-1]^this.mt[s-1]>>>30;this.mt[s]=(this.mt[s]^(1566083941*((4294901760&r)>>>16)<<16)+1566083941*(65535&r))-s,this.mt[s]>>>=0,++s>=this.N&&(this.mt[0]=this.mt[this.N-1],s=1)}this.mt[0]=2147483648},MersenneTwister.prototype.random_int=function(){var t,i=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var s;for(this.mti==this.N+1&&this.init_seed(5489),s=0;s<this.N-this.M;s++)t=this.mt[s]&this.UPPER_MASK|this.mt[s+1]&this.LOWER_MASK,this.mt[s]=this.mt[s+this.M]^t>>>1^i[1&t];for(;s<this.N-1;s++)t=this.mt[s]&this.UPPER_MASK|this.mt[s+1]&this.LOWER_MASK,this.mt[s]=this.mt[s+(this.M-this.N)]^t>>>1^i[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^i[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0},MersenneTwister.prototype.random_int31=function(){return this.random_int()>>>1},MersenneTwister.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},MersenneTwister.prototype.random=function(){return this.random_int()*(1/4294967296)},MersenneTwister.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},MersenneTwister.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},module.exports=MersenneTwister;

},{}]},{},[1]);
