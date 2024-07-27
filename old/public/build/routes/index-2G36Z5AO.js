import {
  Divider,
  Layout,
  PillButton,
  animated,
  links,
  useSpring,
  useTheme,
  useTransition
} from "/build/_shared/chunk-KLGDJJKS.js";
import "/build/_shared/chunk-KQNJIRNM.js";
import "/build/_shared/chunk-E7SKMB7I.js";
import "/build/_shared/chunk-XK7BNA4U.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// node_modules/tsparticles/pjs.js
var require_pjs = __commonJS({
  "node_modules/tsparticles/pjs.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initPjs = void 0;
    var initPjs = (main) => {
      const particlesJS = (tagId, options) => {
        return main.load(tagId, options);
      };
      particlesJS.load = (tagId, pathConfigJson, callback) => {
        main.loadJSON(tagId, pathConfigJson).then((container) => {
          if (container) {
            callback(container);
          }
        }).catch(() => {
          callback(void 0);
        });
      };
      particlesJS.setOnClickHandler = (callback) => {
        main.setOnClickHandler(callback);
      };
      const pJSDom = main.dom();
      return { particlesJS, pJSDom };
    };
    exports.initPjs = initPjs;
  }
});

// node_modules/tsparticles/Enums/Directions/MoveDirection.js
var require_MoveDirection = __commonJS({
  "node_modules/tsparticles/Enums/Directions/MoveDirection.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveDirection = void 0;
    var MoveDirection;
    (function(MoveDirection2) {
      MoveDirection2["bottom"] = "bottom";
      MoveDirection2["bottomLeft"] = "bottom-left";
      MoveDirection2["bottomRight"] = "bottom-right";
      MoveDirection2["left"] = "left";
      MoveDirection2["none"] = "none";
      MoveDirection2["right"] = "right";
      MoveDirection2["top"] = "top";
      MoveDirection2["topLeft"] = "top-left";
      MoveDirection2["topRight"] = "top-right";
    })(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));
  }
});

// node_modules/tsparticles/Enums/Directions/RotateDirection.js
var require_RotateDirection = __commonJS({
  "node_modules/tsparticles/Enums/Directions/RotateDirection.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RotateDirection = void 0;
    var RotateDirection;
    (function(RotateDirection2) {
      RotateDirection2["clockwise"] = "clockwise";
      RotateDirection2["counterClockwise"] = "counter-clockwise";
      RotateDirection2["random"] = "random";
    })(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));
  }
});

// node_modules/tsparticles/Enums/Directions/OutModeDirection.js
var require_OutModeDirection = __commonJS({
  "node_modules/tsparticles/Enums/Directions/OutModeDirection.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutModeDirection = void 0;
    var OutModeDirection;
    (function(OutModeDirection2) {
      OutModeDirection2["bottom"] = "bottom";
      OutModeDirection2["left"] = "left";
      OutModeDirection2["right"] = "right";
      OutModeDirection2["top"] = "top";
    })(OutModeDirection = exports.OutModeDirection || (exports.OutModeDirection = {}));
  }
});

// node_modules/tsparticles/Enums/Directions/TiltDirection.js
var require_TiltDirection = __commonJS({
  "node_modules/tsparticles/Enums/Directions/TiltDirection.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TiltDirection = void 0;
    var TiltDirection;
    (function(TiltDirection2) {
      TiltDirection2["clockwise"] = "clockwise";
      TiltDirection2["counterClockwise"] = "counter-clockwise";
      TiltDirection2["random"] = "random";
    })(TiltDirection = exports.TiltDirection || (exports.TiltDirection = {}));
  }
});

// node_modules/tsparticles/Enums/Directions/index.js
var require_Directions = __commonJS({
  "node_modules/tsparticles/Enums/Directions/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_MoveDirection(), exports);
    __exportStar(require_RotateDirection(), exports);
    __exportStar(require_OutModeDirection(), exports);
    __exportStar(require_TiltDirection(), exports);
  }
});

// node_modules/tsparticles/Enums/Modes/ClickMode.js
var require_ClickMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/ClickMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClickMode = void 0;
    var ClickMode;
    (function(ClickMode2) {
      ClickMode2["attract"] = "attract";
      ClickMode2["bubble"] = "bubble";
      ClickMode2["push"] = "push";
      ClickMode2["remove"] = "remove";
      ClickMode2["repulse"] = "repulse";
      ClickMode2["pause"] = "pause";
      ClickMode2["trail"] = "trail";
    })(ClickMode = exports.ClickMode || (exports.ClickMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/DestroyMode.js
var require_DestroyMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/DestroyMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DestroyMode = void 0;
    var DestroyMode;
    (function(DestroyMode2) {
      DestroyMode2["none"] = "none";
      DestroyMode2["split"] = "split";
    })(DestroyMode = exports.DestroyMode || (exports.DestroyMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/DivMode.js
var require_DivMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/DivMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DivMode = void 0;
    var DivMode;
    (function(DivMode2) {
      DivMode2["bounce"] = "bounce";
      DivMode2["bubble"] = "bubble";
      DivMode2["repulse"] = "repulse";
    })(DivMode = exports.DivMode || (exports.DivMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/HoverMode.js
var require_HoverMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/HoverMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HoverMode = void 0;
    var HoverMode;
    (function(HoverMode2) {
      HoverMode2["attract"] = "attract";
      HoverMode2["bounce"] = "bounce";
      HoverMode2["bubble"] = "bubble";
      HoverMode2["connect"] = "connect";
      HoverMode2["grab"] = "grab";
      HoverMode2["light"] = "light";
      HoverMode2["repulse"] = "repulse";
      HoverMode2["slow"] = "slow";
      HoverMode2["trail"] = "trail";
    })(HoverMode = exports.HoverMode || (exports.HoverMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/CollisionMode.js
var require_CollisionMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/CollisionMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CollisionMode = void 0;
    var CollisionMode;
    (function(CollisionMode2) {
      CollisionMode2["absorb"] = "absorb";
      CollisionMode2["bounce"] = "bounce";
      CollisionMode2["destroy"] = "destroy";
    })(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/OutMode.js
var require_OutMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/OutMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutMode = void 0;
    var OutMode;
    (function(OutMode2) {
      OutMode2["bounce"] = "bounce";
      OutMode2["bounceHorizontal"] = "bounce-horizontal";
      OutMode2["bounceVertical"] = "bounce-vertical";
      OutMode2["none"] = "none";
      OutMode2["out"] = "out";
      OutMode2["destroy"] = "destroy";
      OutMode2["split"] = "split";
    })(OutMode = exports.OutMode || (exports.OutMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/RollMode.js
var require_RollMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/RollMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RollMode = void 0;
    var RollMode;
    (function(RollMode2) {
      RollMode2["both"] = "both";
      RollMode2["horizontal"] = "horizontal";
      RollMode2["vertical"] = "vertical";
    })(RollMode = exports.RollMode || (exports.RollMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/SizeMode.js
var require_SizeMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/SizeMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SizeMode = void 0;
    var SizeMode;
    (function(SizeMode2) {
      SizeMode2["precise"] = "precise";
      SizeMode2["percent"] = "percent";
    })(SizeMode = exports.SizeMode || (exports.SizeMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/ThemeMode.js
var require_ThemeMode = __commonJS({
  "node_modules/tsparticles/Enums/Modes/ThemeMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ThemeMode = void 0;
    var ThemeMode;
    (function(ThemeMode2) {
      ThemeMode2["any"] = "any";
      ThemeMode2["dark"] = "dark";
      ThemeMode2["light"] = "light";
    })(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {}));
  }
});

// node_modules/tsparticles/Enums/Modes/index.js
var require_Modes = __commonJS({
  "node_modules/tsparticles/Enums/Modes/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ClickMode(), exports);
    __exportStar(require_DestroyMode(), exports);
    __exportStar(require_DivMode(), exports);
    __exportStar(require_HoverMode(), exports);
    __exportStar(require_CollisionMode(), exports);
    __exportStar(require_OutMode(), exports);
    __exportStar(require_RollMode(), exports);
    __exportStar(require_SizeMode(), exports);
    __exportStar(require_ThemeMode(), exports);
  }
});

// node_modules/tsparticles/Enums/AnimationStatus.js
var require_AnimationStatus = __commonJS({
  "node_modules/tsparticles/Enums/AnimationStatus.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationStatus = void 0;
    var AnimationStatus;
    (function(AnimationStatus2) {
      AnimationStatus2[AnimationStatus2["increasing"] = 0] = "increasing";
      AnimationStatus2[AnimationStatus2["decreasing"] = 1] = "decreasing";
    })(AnimationStatus = exports.AnimationStatus || (exports.AnimationStatus = {}));
  }
});

// node_modules/tsparticles/Enums/Types/AlterType.js
var require_AlterType = __commonJS({
  "node_modules/tsparticles/Enums/Types/AlterType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlterType = void 0;
    var AlterType;
    (function(AlterType2) {
      AlterType2["darken"] = "darken";
      AlterType2["enlighten"] = "enlighten";
    })(AlterType = exports.AlterType || (exports.AlterType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/DestroyType.js
var require_DestroyType = __commonJS({
  "node_modules/tsparticles/Enums/Types/DestroyType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DestroyType = void 0;
    var DestroyType;
    (function(DestroyType2) {
      DestroyType2["none"] = "none";
      DestroyType2["max"] = "max";
      DestroyType2["min"] = "min";
    })(DestroyType = exports.DestroyType || (exports.DestroyType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/GradientType.js
var require_GradientType = __commonJS({
  "node_modules/tsparticles/Enums/Types/GradientType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GradientType = void 0;
    var GradientType;
    (function(GradientType2) {
      GradientType2["linear"] = "linear";
      GradientType2["radial"] = "radial";
      GradientType2["random"] = "random";
    })(GradientType = exports.GradientType || (exports.GradientType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/InteractorType.js
var require_InteractorType = __commonJS({
  "node_modules/tsparticles/Enums/Types/InteractorType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractorType = void 0;
    var InteractorType;
    (function(InteractorType2) {
      InteractorType2[InteractorType2["External"] = 0] = "External";
      InteractorType2[InteractorType2["Particles"] = 1] = "Particles";
    })(InteractorType = exports.InteractorType || (exports.InteractorType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/ShapeType.js
var require_ShapeType = __commonJS({
  "node_modules/tsparticles/Enums/Types/ShapeType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShapeType = void 0;
    var ShapeType;
    (function(ShapeType2) {
      ShapeType2["char"] = "char";
      ShapeType2["character"] = "character";
      ShapeType2["circle"] = "circle";
      ShapeType2["edge"] = "edge";
      ShapeType2["image"] = "image";
      ShapeType2["images"] = "images";
      ShapeType2["line"] = "line";
      ShapeType2["polygon"] = "polygon";
      ShapeType2["square"] = "square";
      ShapeType2["star"] = "star";
      ShapeType2["triangle"] = "triangle";
    })(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/StartValueType.js
var require_StartValueType = __commonJS({
  "node_modules/tsparticles/Enums/Types/StartValueType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StartValueType = void 0;
    var StartValueType;
    (function(StartValueType2) {
      StartValueType2["max"] = "max";
      StartValueType2["min"] = "min";
      StartValueType2["random"] = "random";
    })(StartValueType = exports.StartValueType || (exports.StartValueType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/DivType.js
var require_DivType = __commonJS({
  "node_modules/tsparticles/Enums/Types/DivType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DivType = void 0;
    var DivType;
    (function(DivType2) {
      DivType2["circle"] = "circle";
      DivType2["rectangle"] = "rectangle";
    })(DivType = exports.DivType || (exports.DivType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/EasingType.js
var require_EasingType = __commonJS({
  "node_modules/tsparticles/Enums/Types/EasingType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EasingType = void 0;
    var EasingType;
    (function(EasingType2) {
      EasingType2["easeOutBack"] = "ease-out-back";
      EasingType2["easeOutCirc"] = "ease-out-circ";
      EasingType2["easeOutCubic"] = "ease-out-cubic";
      EasingType2["easeOutQuad"] = "ease-out-quad";
      EasingType2["easeOutQuart"] = "ease-out-quart";
      EasingType2["easeOutQuint"] = "ease-out-quint";
      EasingType2["easeOutExpo"] = "ease-out-expo";
      EasingType2["easeOutSine"] = "ease-out-sine";
    })(EasingType = exports.EasingType || (exports.EasingType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/OrbitType.js
var require_OrbitType = __commonJS({
  "node_modules/tsparticles/Enums/Types/OrbitType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OrbitType = void 0;
    var OrbitType;
    (function(OrbitType2) {
      OrbitType2["front"] = "front";
      OrbitType2["back"] = "back";
    })(OrbitType = exports.OrbitType || (exports.OrbitType = {}));
  }
});

// node_modules/tsparticles/Enums/Types/index.js
var require_Types = __commonJS({
  "node_modules/tsparticles/Enums/Types/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_AlterType(), exports);
    __exportStar(require_DestroyType(), exports);
    __exportStar(require_GradientType(), exports);
    __exportStar(require_InteractorType(), exports);
    __exportStar(require_ShapeType(), exports);
    __exportStar(require_StartValueType(), exports);
    __exportStar(require_DivType(), exports);
    __exportStar(require_EasingType(), exports);
    __exportStar(require_OrbitType(), exports);
  }
});

// node_modules/tsparticles/Enums/InteractivityDetect.js
var require_InteractivityDetect = __commonJS({
  "node_modules/tsparticles/Enums/InteractivityDetect.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractivityDetect = void 0;
    var InteractivityDetect;
    (function(InteractivityDetect2) {
      InteractivityDetect2["canvas"] = "canvas";
      InteractivityDetect2["parent"] = "parent";
      InteractivityDetect2["window"] = "window";
    })(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));
  }
});

// node_modules/tsparticles/Enums/index.js
var require_Enums = __commonJS({
  "node_modules/tsparticles/Enums/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_Directions(), exports);
    __exportStar(require_Modes(), exports);
    __exportStar(require_AnimationStatus(), exports);
    __exportStar(require_Types(), exports);
    __exportStar(require_InteractivityDetect(), exports);
  }
});

// node_modules/tsparticles/Core/Particle/Vector.js
var require_Vector = __commonJS({
  "node_modules/tsparticles/Core/Particle/Vector.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector = void 0;
    var Vector = class {
      constructor(x, y) {
        let defX, defY;
        if (y === void 0) {
          if (typeof x === "number") {
            throw new Error("tsParticles - Vector not initialized correctly");
          }
          const coords = x;
          [defX, defY] = [coords.x, coords.y];
        } else {
          [defX, defY] = [x, y];
        }
        this.x = defX;
        this.y = defY;
      }
      static clone(source) {
        return Vector.create(source.x, source.y);
      }
      static create(x, y) {
        return new Vector(x, y);
      }
      static get origin() {
        return Vector.create(0, 0);
      }
      get angle() {
        return Math.atan2(this.y, this.x);
      }
      set angle(angle) {
        this.updateFromAngle(angle, this.length);
      }
      get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
      }
      set length(length) {
        this.updateFromAngle(this.angle, length);
      }
      add(v) {
        return Vector.create(this.x + v.x, this.y + v.y);
      }
      addTo(v) {
        this.x += v.x;
        this.y += v.y;
      }
      sub(v) {
        return Vector.create(this.x - v.x, this.y - v.y);
      }
      subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
      }
      mult(n) {
        return Vector.create(this.x * n, this.y * n);
      }
      multTo(n) {
        this.x *= n;
        this.y *= n;
      }
      div(n) {
        return Vector.create(this.x / n, this.y / n);
      }
      divTo(n) {
        this.x /= n;
        this.y /= n;
      }
      distanceTo(v) {
        return this.sub(v).length;
      }
      getLengthSq() {
        return this.x ** 2 + this.y ** 2;
      }
      distanceToSq(v) {
        return this.sub(v).getLengthSq();
      }
      manhattanDistanceTo(v) {
        return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
      }
      copy() {
        return Vector.clone(this);
      }
      setTo(velocity) {
        this.x = velocity.x;
        this.y = velocity.y;
      }
      rotate(angle) {
        return Vector.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
      }
      updateFromAngle(angle, length) {
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
      }
    };
    exports.Vector = Vector;
  }
});

// node_modules/tsparticles/Utils/NumberUtils.js
var require_NumberUtils = __commonJS({
  "node_modules/tsparticles/Utils/NumberUtils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calcEasing = exports.collisionVelocity = exports.getParticleBaseVelocity = exports.getParticleDirectionAngle = exports.getDistance = exports.getDistances = exports.getValue = exports.setRangeValue = exports.getRangeMax = exports.getRangeMin = exports.getRangeValue = exports.randomInRange = exports.mix = exports.clamp = void 0;
    var Enums_1 = require_Enums();
    var Vector_1 = require_Vector();
    function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    exports.clamp = clamp;
    function mix(comp1, comp2, weight1, weight2) {
      return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    }
    exports.mix = mix;
    function randomInRange(r) {
      const max = getRangeMax(r);
      let min = getRangeMin(r);
      if (max === min) {
        min = 0;
      }
      return Math.random() * (max - min) + min;
    }
    exports.randomInRange = randomInRange;
    function getRangeValue(value) {
      return typeof value === "number" ? value : randomInRange(value);
    }
    exports.getRangeValue = getRangeValue;
    function getRangeMin(value) {
      return typeof value === "number" ? value : value.min;
    }
    exports.getRangeMin = getRangeMin;
    function getRangeMax(value) {
      return typeof value === "number" ? value : value.max;
    }
    exports.getRangeMax = getRangeMax;
    function setRangeValue(source, value) {
      if (source === value || value === void 0 && typeof source === "number") {
        return source;
      }
      const min = getRangeMin(source), max = getRangeMax(source);
      return value !== void 0 ? {
        min: Math.min(min, value),
        max: Math.max(max, value)
      } : setRangeValue(min, max);
    }
    exports.setRangeValue = setRangeValue;
    function getValue(options) {
      const random = options.random;
      const { enable, minimumValue } = typeof random === "boolean" ? { enable: random, minimumValue: 0 } : random;
      return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
    }
    exports.getValue = getValue;
    function getDistances(pointA, pointB) {
      const dx = pointA.x - pointB.x;
      const dy = pointA.y - pointB.y;
      return { dx, dy, distance: Math.sqrt(dx * dx + dy * dy) };
    }
    exports.getDistances = getDistances;
    function getDistance(pointA, pointB) {
      return getDistances(pointA, pointB).distance;
    }
    exports.getDistance = getDistance;
    function getParticleDirectionAngle(direction) {
      if (typeof direction === "number") {
        return direction * Math.PI / 180;
      } else {
        switch (direction) {
          case Enums_1.MoveDirection.top:
            return -Math.PI / 2;
          case Enums_1.MoveDirection.topRight:
            return -Math.PI / 4;
          case Enums_1.MoveDirection.right:
            return 0;
          case Enums_1.MoveDirection.bottomRight:
            return Math.PI / 4;
          case Enums_1.MoveDirection.bottom:
            return Math.PI / 2;
          case Enums_1.MoveDirection.bottomLeft:
            return 3 * Math.PI / 4;
          case Enums_1.MoveDirection.left:
            return Math.PI;
          case Enums_1.MoveDirection.topLeft:
            return -3 * Math.PI / 4;
          case Enums_1.MoveDirection.none:
          default:
            return Math.random() * Math.PI * 2;
        }
      }
    }
    exports.getParticleDirectionAngle = getParticleDirectionAngle;
    function getParticleBaseVelocity(direction) {
      const baseVelocity = Vector_1.Vector.origin;
      baseVelocity.length = 1;
      baseVelocity.angle = direction;
      return baseVelocity;
    }
    exports.getParticleBaseVelocity = getParticleBaseVelocity;
    function collisionVelocity(v1, v2, m1, m2) {
      return Vector_1.Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
    }
    exports.collisionVelocity = collisionVelocity;
    function calcEasing(value, type) {
      switch (type) {
        case Enums_1.EasingType.easeOutQuad:
          return 1 - (1 - value) ** 2;
        case Enums_1.EasingType.easeOutCubic:
          return 1 - (1 - value) ** 3;
        case Enums_1.EasingType.easeOutQuart:
          return 1 - (1 - value) ** 4;
        case Enums_1.EasingType.easeOutQuint:
          return 1 - (1 - value) ** 5;
        case Enums_1.EasingType.easeOutExpo:
          return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
        case Enums_1.EasingType.easeOutSine:
          return Math.sin(value * Math.PI / 2);
        case Enums_1.EasingType.easeOutBack: {
          const c1 = 1.70158;
          const c3 = c1 + 1;
          return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
        }
        case Enums_1.EasingType.easeOutCirc:
          return Math.sqrt(1 - Math.pow(value - 1, 2));
        default:
          return value;
      }
    }
    exports.calcEasing = calcEasing;
  }
});

// node_modules/tsparticles/Utils/Utils.js
var require_Utils = __commonJS({
  "node_modules/tsparticles/Utils/Utils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rectBounce = exports.circleBounce = exports.circleBounceDataFromParticle = exports.divMode = exports.singleDivModeExecute = exports.divModeExecute = exports.isDivModeEnabled = exports.deepExtend = exports.calculateBounds = exports.areBoundsInside = exports.isPointInside = exports.itemFromArray = exports.arrayRandomIndex = exports.loadFont = exports.isInArray = exports.cancelAnimation = exports.animate = exports.isSsr = void 0;
    var Enums_1 = require_Enums();
    var NumberUtils_1 = require_NumberUtils();
    var Vector_1 = require_Vector();
    function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
      const res = { bounced: false };
      if (pOtherSide.min >= rectOtherSide.min && pOtherSide.min <= rectOtherSide.max && pOtherSide.max >= rectOtherSide.min && pOtherSide.max <= rectOtherSide.max) {
        if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
          res.velocity = velocity * -factor;
          res.bounced = true;
        }
      }
      return res;
    }
    function checkSelector(element, selectors) {
      if (selectors instanceof Array) {
        for (const selector of selectors) {
          if (element.matches(selector)) {
            return true;
          }
        }
        return false;
      } else {
        return element.matches(selectors);
      }
    }
    function isSsr() {
      return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
    }
    exports.isSsr = isSsr;
    function animate() {
      return isSsr() ? (callback) => setTimeout(callback) : (callback) => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(callback);
    }
    exports.animate = animate;
    function cancelAnimation() {
      return isSsr() ? (handle) => clearTimeout(handle) : (handle) => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(handle);
    }
    exports.cancelAnimation = cancelAnimation;
    function isInArray(value, array) {
      return value === array || array instanceof Array && array.indexOf(value) > -1;
    }
    exports.isInArray = isInArray;
    async function loadFont(character) {
      var _a, _b;
      try {
        await document.fonts.load(`${(_a = character.weight) !== null && _a !== void 0 ? _a : "400"} 36px '${(_b = character.font) !== null && _b !== void 0 ? _b : "Verdana"}'`);
      } catch (_c) {
      }
    }
    exports.loadFont = loadFont;
    function arrayRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
    }
    exports.arrayRandomIndex = arrayRandomIndex;
    function itemFromArray(array, index, useIndex = true) {
      const fixedIndex = index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array);
      return array[fixedIndex];
    }
    exports.itemFromArray = itemFromArray;
    function isPointInside(point, size, radius, direction) {
      return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
    }
    exports.isPointInside = isPointInside;
    function areBoundsInside(bounds, size, direction) {
      let inside = true;
      if (!direction || direction === Enums_1.OutModeDirection.bottom) {
        inside = bounds.top < size.height;
      }
      if (inside && (!direction || direction === Enums_1.OutModeDirection.left)) {
        inside = bounds.right > 0;
      }
      if (inside && (!direction || direction === Enums_1.OutModeDirection.right)) {
        inside = bounds.left < size.width;
      }
      if (inside && (!direction || direction === Enums_1.OutModeDirection.top)) {
        inside = bounds.bottom > 0;
      }
      return inside;
    }
    exports.areBoundsInside = areBoundsInside;
    function calculateBounds(point, radius) {
      return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
      };
    }
    exports.calculateBounds = calculateBounds;
    function deepExtend(destination, ...sources) {
      for (const source of sources) {
        if (source === void 0 || source === null) {
          continue;
        }
        if (typeof source !== "object") {
          destination = source;
          continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
          destination = [];
        } else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
          destination = {};
        }
        for (const key in source) {
          if (key === "__proto__") {
            continue;
          }
          const sourceDict = source;
          const value = sourceDict[key];
          const isObject = typeof value === "object";
          const destDict = destination;
          destDict[key] = isObject && Array.isArray(value) ? value.map((v) => deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
        }
      }
      return destination;
    }
    exports.deepExtend = deepExtend;
    function isDivModeEnabled(mode, divs) {
      return divs instanceof Array ? !!divs.find((t) => t.enable && isInArray(mode, t.mode)) : isInArray(mode, divs.mode);
    }
    exports.isDivModeEnabled = isDivModeEnabled;
    function divModeExecute(mode, divs, callback) {
      if (divs instanceof Array) {
        for (const div of divs) {
          const divMode2 = div.mode;
          const divEnabled = div.enable;
          if (divEnabled && isInArray(mode, divMode2)) {
            singleDivModeExecute(div, callback);
          }
        }
      } else {
        const divMode2 = divs.mode;
        const divEnabled = divs.enable;
        if (divEnabled && isInArray(mode, divMode2)) {
          singleDivModeExecute(divs, callback);
        }
      }
    }
    exports.divModeExecute = divModeExecute;
    function singleDivModeExecute(div, callback) {
      const selectors = div.selectors;
      if (selectors instanceof Array) {
        for (const selector of selectors) {
          callback(selector, div);
        }
      } else {
        callback(selectors, div);
      }
    }
    exports.singleDivModeExecute = singleDivModeExecute;
    function divMode(divs, element) {
      if (!element || !divs) {
        return;
      }
      if (divs instanceof Array) {
        return divs.find((d) => checkSelector(element, d.selectors));
      } else if (checkSelector(element, divs.selectors)) {
        return divs;
      }
    }
    exports.divMode = divMode;
    function circleBounceDataFromParticle(p) {
      return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: Vector_1.Vector.create((0, NumberUtils_1.getValue)(p.options.bounce.horizontal), (0, NumberUtils_1.getValue)(p.options.bounce.vertical))
      };
    }
    exports.circleBounceDataFromParticle = circleBounceDataFromParticle;
    function circleBounce(p1, p2) {
      const xVelocityDiff = p1.velocity.x;
      const yVelocityDiff = p1.velocity.y;
      const pos1 = p1.position;
      const pos2 = p2.position;
      const xDist = pos2.x - pos1.x;
      const yDist = pos2.y - pos1.y;
      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
        const m1 = p1.mass;
        const m2 = p2.mass;
        const u1 = p1.velocity.rotate(angle);
        const u2 = p2.velocity.rotate(angle);
        const v1 = (0, NumberUtils_1.collisionVelocity)(u1, u2, m1, m2);
        const v2 = (0, NumberUtils_1.collisionVelocity)(u2, u1, m1, m2);
        const vFinal1 = v1.rotate(-angle);
        const vFinal2 = v2.rotate(-angle);
        p1.velocity.x = vFinal1.x * p1.factor.x;
        p1.velocity.y = vFinal1.y * p1.factor.y;
        p2.velocity.x = vFinal2.x * p2.factor.x;
        p2.velocity.y = vFinal2.y * p2.factor.y;
      }
    }
    exports.circleBounce = circleBounce;
    function rectBounce(particle, divBounds) {
      const pPos = particle.getPosition();
      const size = particle.getRadius();
      const bounds = calculateBounds(pPos, size);
      const resH = rectSideBounce({
        min: bounds.left,
        max: bounds.right
      }, {
        min: bounds.top,
        max: bounds.bottom
      }, {
        min: divBounds.left,
        max: divBounds.right
      }, {
        min: divBounds.top,
        max: divBounds.bottom
      }, particle.velocity.x, (0, NumberUtils_1.getValue)(particle.options.bounce.horizontal));
      if (resH.bounced) {
        if (resH.velocity !== void 0) {
          particle.velocity.x = resH.velocity;
        }
        if (resH.position !== void 0) {
          particle.position.x = resH.position;
        }
      }
      const resV = rectSideBounce({
        min: bounds.top,
        max: bounds.bottom
      }, {
        min: bounds.left,
        max: bounds.right
      }, {
        min: divBounds.top,
        max: divBounds.bottom
      }, {
        min: divBounds.left,
        max: divBounds.right
      }, particle.velocity.y, (0, NumberUtils_1.getValue)(particle.options.bounce.vertical));
      if (resV.bounced) {
        if (resV.velocity !== void 0) {
          particle.velocity.y = resV.velocity;
        }
        if (resV.position !== void 0) {
          particle.position.y = resV.position;
        }
      }
    }
    exports.rectBounce = rectBounce;
  }
});

// node_modules/tsparticles/Utils/Constants.js
var require_Constants = __commonJS({
  "node_modules/tsparticles/Utils/Constants.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constants = void 0;
    var Constants = class {
    };
    exports.Constants = Constants;
    Constants.canvasClass = "tsparticles-canvas-el";
    Constants.randomColorValue = "random";
    Constants.midColorValue = "mid";
    Constants.touchEndEvent = "touchend";
    Constants.mouseDownEvent = "mousedown";
    Constants.mouseUpEvent = "mouseup";
    Constants.mouseMoveEvent = "mousemove";
    Constants.touchStartEvent = "touchstart";
    Constants.touchMoveEvent = "touchmove";
    Constants.mouseLeaveEvent = "mouseleave";
    Constants.mouseOutEvent = "mouseout";
    Constants.touchCancelEvent = "touchcancel";
    Constants.resizeEvent = "resize";
    Constants.visibilityChangeEvent = "visibilitychange";
    Constants.noPolygonDataLoaded = "No polygon data loaded.";
    Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
  }
});

// node_modules/tsparticles/Utils/ColorUtils.js
var require_ColorUtils = __commonJS({
  "node_modules/tsparticles/Utils/ColorUtils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHslAnimationFromHsl = exports.getHslFromAnimation = exports.getLinkRandomColor = exports.getLinkColor = exports.colorMix = exports.getStyleFromHsv = exports.getStyleFromHsl = exports.getStyleFromRgb = exports.getRandomRgbColor = exports.rgbaToHsva = exports.rgbToHsv = exports.hsvaToRgba = exports.hsvToRgb = exports.hsvaToHsla = exports.hsvToHsl = exports.hslaToHsva = exports.hslToHsv = exports.hslaToRgba = exports.hslToRgb = exports.stringToRgb = exports.stringToAlpha = exports.rgbToHsl = exports.colorToHsl = exports.colorToRgb = void 0;
    var Utils_1 = require_Utils();
    var Constants_1 = require_Constants();
    var NumberUtils_1 = require_NumberUtils();
    var Enums_1 = require_Enums();
    function hue2rgb(p, q, t) {
      let tCalc = t;
      if (tCalc < 0) {
        tCalc += 1;
      }
      if (tCalc > 1) {
        tCalc -= 1;
      }
      if (tCalc < 1 / 6) {
        return p + (q - p) * 6 * tCalc;
      }
      if (tCalc < 1 / 2) {
        return q;
      }
      if (tCalc < 2 / 3) {
        return p + (q - p) * (2 / 3 - tCalc) * 6;
      }
      return p;
    }
    function stringToRgba(input) {
      if (input.startsWith("rgb")) {
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result ? {
          a: result.length > 4 ? parseFloat(result[5]) : 1,
          b: parseInt(result[3], 10),
          g: parseInt(result[2], 10),
          r: parseInt(result[1], 10)
        } : void 0;
      } else if (input.startsWith("hsl")) {
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result ? hslaToRgba({
          a: result.length > 4 ? parseFloat(result[5]) : 1,
          h: parseInt(result[1], 10),
          l: parseInt(result[3], 10),
          s: parseInt(result[2], 10)
        }) : void 0;
      } else if (input.startsWith("hsv")) {
        const regex = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result ? hsvaToRgba({
          a: result.length > 4 ? parseFloat(result[5]) : 1,
          h: parseInt(result[1], 10),
          s: parseInt(result[2], 10),
          v: parseInt(result[3], 10)
        }) : void 0;
      } else {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
        const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
          return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
        });
        const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
        const result = regex.exec(hexFixed);
        return result ? {
          a: result[4] !== void 0 ? parseInt(result[4], 16) / 255 : 1,
          b: parseInt(result[3], 16),
          g: parseInt(result[2], 16),
          r: parseInt(result[1], 16)
        } : void 0;
      }
    }
    function colorToRgb(input, index, useIndex = true) {
      var _a, _b, _c;
      if (input === void 0) {
        return;
      }
      const color = typeof input === "string" ? { value: input } : input;
      let res;
      if (typeof color.value === "string") {
        if (color.value === Constants_1.Constants.randomColorValue) {
          res = getRandomRgbColor();
        } else {
          res = stringToRgb(color.value);
        }
      } else {
        if (color.value instanceof Array) {
          const colorSelected = (0, Utils_1.itemFromArray)(color.value, index, useIndex);
          res = colorToRgb({ value: colorSelected });
        } else {
          const colorValue = color.value;
          const rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
          if (rgbColor.r !== void 0) {
            res = rgbColor;
          } else {
            const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
            if (hslColor.h !== void 0 && hslColor.l !== void 0) {
              res = hslToRgb(hslColor);
            } else {
              const hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;
              if (hsvColor.h !== void 0 && hsvColor.v !== void 0) {
                res = hsvToRgb(hsvColor);
              }
            }
          }
        }
      }
      return res;
    }
    exports.colorToRgb = colorToRgb;
    function colorToHsl(color, index, useIndex = true) {
      const rgb = colorToRgb(color, index, useIndex);
      return rgb !== void 0 ? rgbToHsl(rgb) : void 0;
    }
    exports.colorToHsl = colorToHsl;
    function rgbToHsl(color) {
      const r1 = color.r / 255;
      const g1 = color.g / 255;
      const b1 = color.b / 255;
      const max = Math.max(r1, g1, b1);
      const min = Math.min(r1, g1, b1);
      const res = {
        h: 0,
        l: (max + min) / 2,
        s: 0
      };
      if (max != min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
      }
      res.l *= 100;
      res.s *= 100;
      res.h *= 60;
      if (res.h < 0) {
        res.h += 360;
      }
      return res;
    }
    exports.rgbToHsl = rgbToHsl;
    function stringToAlpha(input) {
      var _a;
      return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    }
    exports.stringToAlpha = stringToAlpha;
    function stringToRgb(input) {
      return stringToRgba(input);
    }
    exports.stringToRgb = stringToRgb;
    function hslToRgb(hsl) {
      const result = { b: 0, g: 0, r: 0 };
      const hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100
      };
      if (hslPercent.s === 0) {
        result.b = hslPercent.l;
        result.g = hslPercent.l;
        result.r = hslPercent.l;
      } else {
        const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
        const p = 2 * hslPercent.l - q;
        result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb(p, q, hslPercent.h);
        result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
      }
      result.r = Math.floor(result.r * 255);
      result.g = Math.floor(result.g * 255);
      result.b = Math.floor(result.b * 255);
      return result;
    }
    exports.hslToRgb = hslToRgb;
    function hslaToRgba(hsla) {
      const rgbResult = hslToRgb(hsla);
      return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
      };
    }
    exports.hslaToRgba = hslaToRgba;
    function hslToHsv(hsl) {
      const l = hsl.l / 100, sl = hsl.s / 100;
      const v = l + sl * Math.min(l, 1 - l), sv = !v ? 0 : 2 * (1 - l / v);
      return {
        h: hsl.h,
        s: sv * 100,
        v: v * 100
      };
    }
    exports.hslToHsv = hslToHsv;
    function hslaToHsva(hsla) {
      const hsvResult = hslToHsv(hsla);
      return {
        a: hsla.a,
        h: hsvResult.h,
        s: hsvResult.s,
        v: hsvResult.v
      };
    }
    exports.hslaToHsva = hslaToHsva;
    function hsvToHsl(hsv) {
      const v = hsv.v / 100, sv = hsv.s / 100;
      const l = v * (1 - sv / 2), sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
      return {
        h: hsv.h,
        l: l * 100,
        s: sl * 100
      };
    }
    exports.hsvToHsl = hsvToHsl;
    function hsvaToHsla(hsva) {
      const hslResult = hsvToHsl(hsva);
      return {
        a: hsva.a,
        h: hslResult.h,
        l: hslResult.l,
        s: hslResult.s
      };
    }
    exports.hsvaToHsla = hsvaToHsla;
    function hsvToRgb(hsv) {
      const result = { b: 0, g: 0, r: 0 };
      const hsvPercent = {
        h: hsv.h / 60,
        s: hsv.s / 100,
        v: hsv.v / 100
      };
      const c = hsvPercent.v * hsvPercent.s, x = c * (1 - Math.abs(hsvPercent.h % 2 - 1));
      let tempRgb;
      if (hsvPercent.h >= 0 && hsvPercent.h <= 1) {
        tempRgb = {
          r: c,
          g: x,
          b: 0
        };
      } else if (hsvPercent.h > 1 && hsvPercent.h <= 2) {
        tempRgb = {
          r: x,
          g: c,
          b: 0
        };
      } else if (hsvPercent.h > 2 && hsvPercent.h <= 3) {
        tempRgb = {
          r: 0,
          g: c,
          b: x
        };
      } else if (hsvPercent.h > 3 && hsvPercent.h <= 4) {
        tempRgb = {
          r: 0,
          g: x,
          b: c
        };
      } else if (hsvPercent.h > 4 && hsvPercent.h <= 5) {
        tempRgb = {
          r: x,
          g: 0,
          b: c
        };
      } else if (hsvPercent.h > 5 && hsvPercent.h <= 6) {
        tempRgb = {
          r: c,
          g: 0,
          b: x
        };
      }
      if (tempRgb) {
        const m = hsvPercent.v - c;
        result.r = Math.floor((tempRgb.r + m) * 255);
        result.g = Math.floor((tempRgb.g + m) * 255);
        result.b = Math.floor((tempRgb.b + m) * 255);
      }
      return result;
    }
    exports.hsvToRgb = hsvToRgb;
    function hsvaToRgba(hsva) {
      const rgbResult = hsvToRgb(hsva);
      return {
        a: hsva.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
      };
    }
    exports.hsvaToRgba = hsvaToRgba;
    function rgbToHsv(rgb) {
      const rgbPercent = {
        r: rgb.r / 255,
        g: rgb.g / 255,
        b: rgb.b / 255
      }, xMax = Math.max(rgbPercent.r, rgbPercent.g, rgbPercent.b), xMin = Math.min(rgbPercent.r, rgbPercent.g, rgbPercent.b), v = xMax, c = xMax - xMin;
      let h = 0;
      if (v === rgbPercent.r) {
        h = 60 * ((rgbPercent.g - rgbPercent.b) / c);
      } else if (v === rgbPercent.g) {
        h = 60 * (2 + (rgbPercent.b - rgbPercent.r) / c);
      } else if (v === rgbPercent.b) {
        h = 60 * (4 + (rgbPercent.r - rgbPercent.g) / c);
      }
      const s = !v ? 0 : c / v;
      return {
        h,
        s: s * 100,
        v: v * 100
      };
    }
    exports.rgbToHsv = rgbToHsv;
    function rgbaToHsva(rgba) {
      const hsvResult = rgbToHsv(rgba);
      return {
        a: rgba.a,
        h: hsvResult.h,
        s: hsvResult.s,
        v: hsvResult.v
      };
    }
    exports.rgbaToHsva = rgbaToHsva;
    function getRandomRgbColor(min) {
      const fixedMin = min !== null && min !== void 0 ? min : 0;
      return {
        b: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
        g: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
        r: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256)))
      };
    }
    exports.getRandomRgbColor = getRandomRgbColor;
    function getStyleFromRgb(color, opacity) {
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
    }
    exports.getStyleFromRgb = getStyleFromRgb;
    function getStyleFromHsl(color, opacity) {
      return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
    }
    exports.getStyleFromHsl = getStyleFromHsl;
    function getStyleFromHsv(color, opacity) {
      return getStyleFromHsl(hsvToHsl(color), opacity);
    }
    exports.getStyleFromHsv = getStyleFromHsv;
    function colorMix(color1, color2, size1, size2) {
      let rgb1 = color1;
      let rgb2 = color2;
      if (rgb1.r === void 0) {
        rgb1 = hslToRgb(color1);
      }
      if (rgb2.r === void 0) {
        rgb2 = hslToRgb(color2);
      }
      return {
        b: (0, NumberUtils_1.mix)(rgb1.b, rgb2.b, size1, size2),
        g: (0, NumberUtils_1.mix)(rgb1.g, rgb2.g, size1, size2),
        r: (0, NumberUtils_1.mix)(rgb1.r, rgb2.r, size1, size2)
      };
    }
    exports.colorMix = colorMix;
    function getLinkColor(p1, p2, linkColor) {
      var _a, _b;
      if (linkColor === Constants_1.Constants.randomColorValue) {
        return getRandomRgbColor();
      } else if (linkColor === "mid") {
        const sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor();
        const destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();
        if (sourceColor && destColor && p2) {
          return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        } else {
          const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
          if (hslColor) {
            return hslToRgb(hslColor);
          }
        }
      } else {
        return linkColor;
      }
    }
    exports.getLinkColor = getLinkColor;
    function getLinkRandomColor(optColor, blink, consent) {
      const color = typeof optColor === "string" ? optColor : optColor.value;
      if (color === Constants_1.Constants.randomColorValue) {
        if (consent) {
          return colorToRgb({
            value: color
          });
        } else if (blink) {
          return Constants_1.Constants.randomColorValue;
        } else {
          return Constants_1.Constants.midColorValue;
        }
      } else {
        return colorToRgb({
          value: color
        });
      }
    }
    exports.getLinkRandomColor = getLinkRandomColor;
    function getHslFromAnimation(animation) {
      return animation !== void 0 ? {
        h: animation.h.value,
        s: animation.s.value,
        l: animation.l.value
      } : void 0;
    }
    exports.getHslFromAnimation = getHslFromAnimation;
    function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
      const resColor = {
        h: {
          enable: false,
          value: hsl.h
        },
        s: {
          enable: false,
          value: hsl.s
        },
        l: {
          enable: false,
          value: hsl.l
        }
      };
      if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
      }
      return resColor;
    }
    exports.getHslAnimationFromHsl = getHslAnimationFromHsl;
    function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
      colorValue.enable = colorAnimation.enable;
      if (colorValue.enable) {
        colorValue.velocity = colorAnimation.speed / 100 * reduceFactor;
        if (colorAnimation.sync) {
          return;
        }
        colorValue.status = Enums_1.AnimationStatus.increasing;
        colorValue.velocity *= Math.random();
        if (colorValue.value) {
          colorValue.value *= Math.random();
        }
      } else {
        colorValue.velocity = 0;
      }
    }
  }
});

// node_modules/tsparticles/Utils/CanvasUtils.js
var require_CanvasUtils = __commonJS({
  "node_modules/tsparticles/Utils/CanvasUtils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alterHsl = exports.drawEllipse = exports.drawParticlePlugin = exports.drawPlugin = exports.drawShapeAfterEffect = exports.drawShape = exports.drawParticle = exports.drawGrabLine = exports.gradient = exports.drawConnectLine = exports.drawLinkTriangle = exports.drawLinkLine = exports.clear = exports.paintBase = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var ColorUtils_1 = require_ColorUtils();
    var Enums_1 = require_Enums();
    function drawLine(context, begin, end) {
      context.beginPath();
      context.moveTo(begin.x, begin.y);
      context.lineTo(end.x, end.y);
      context.closePath();
    }
    function drawTriangle(context, p1, p2, p3) {
      context.beginPath();
      context.moveTo(p1.x, p1.y);
      context.lineTo(p2.x, p2.y);
      context.lineTo(p3.x, p3.y);
      context.closePath();
    }
    function paintBase(context, dimension, baseColor) {
      context.save();
      context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
      context.fillRect(0, 0, dimension.width, dimension.height);
      context.restore();
    }
    exports.paintBase = paintBase;
    function clear(context, dimension) {
      context.clearRect(0, 0, dimension.width, dimension.height);
    }
    exports.clear = clear;
    function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
      let drawn = false;
      if ((0, NumberUtils_1.getDistance)(begin, end) <= maxDistance) {
        drawLine(context, begin, end);
        drawn = true;
      } else if (warp) {
        let pi1;
        let pi2;
        const endNE = {
          x: end.x - canvasSize.width,
          y: end.y
        };
        const d1 = (0, NumberUtils_1.getDistances)(begin, endNE);
        if (d1.distance <= maxDistance) {
          const yi = begin.y - d1.dy / d1.dx * begin.x;
          pi1 = { x: 0, y: yi };
          pi2 = { x: canvasSize.width, y: yi };
        } else {
          const endSW = {
            x: end.x,
            y: end.y - canvasSize.height
          };
          const d2 = (0, NumberUtils_1.getDistances)(begin, endSW);
          if (d2.distance <= maxDistance) {
            const yi = begin.y - d2.dy / d2.dx * begin.x;
            const xi = -yi / (d2.dy / d2.dx);
            pi1 = { x: xi, y: 0 };
            pi2 = { x: xi, y: canvasSize.height };
          } else {
            const endSE = {
              x: end.x - canvasSize.width,
              y: end.y - canvasSize.height
            };
            const d3 = (0, NumberUtils_1.getDistances)(begin, endSE);
            if (d3.distance <= maxDistance) {
              const yi = begin.y - d3.dy / d3.dx * begin.x;
              const xi = -yi / (d3.dy / d3.dx);
              pi1 = { x: xi, y: yi };
              pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
            }
          }
        }
        if (pi1 && pi2) {
          drawLine(context, begin, pi1);
          drawLine(context, end, pi2);
          drawn = true;
        }
      }
      if (!drawn) {
        return;
      }
      context.lineWidth = width;
      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }
      context.strokeStyle = (0, ColorUtils_1.getStyleFromRgb)(colorLine, opacity);
      if (shadow.enable) {
        const shadowColor = (0, ColorUtils_1.colorToRgb)(shadow.color);
        if (shadowColor) {
          context.shadowBlur = shadow.blur;
          context.shadowColor = (0, ColorUtils_1.getStyleFromRgb)(shadowColor);
        }
      }
      context.stroke();
    }
    exports.drawLinkLine = drawLinkLine;
    function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
      drawTriangle(context, pos1, pos2, pos3);
      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }
      context.fillStyle = (0, ColorUtils_1.getStyleFromRgb)(colorTriangle, opacityTriangle);
      context.fill();
    }
    exports.drawLinkTriangle = drawLinkTriangle;
    function drawConnectLine(context, width, lineStyle, begin, end) {
      context.save();
      drawLine(context, begin, end);
      context.lineWidth = width;
      context.strokeStyle = lineStyle;
      context.stroke();
      context.restore();
    }
    exports.drawConnectLine = drawConnectLine;
    function gradient(context, p1, p2, opacity) {
      const gradStop = Math.floor(p2.getRadius() / p1.getRadius());
      const color1 = p1.getFillColor();
      const color2 = p2.getFillColor();
      if (!color1 || !color2) {
        return;
      }
      const sourcePos = p1.getPosition();
      const destPos = p2.getPosition();
      const midRgb = (0, ColorUtils_1.colorMix)(color1, color2, p1.getRadius(), p2.getRadius());
      const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
      grad.addColorStop(0, (0, ColorUtils_1.getStyleFromHsl)(color1, opacity));
      grad.addColorStop(gradStop > 1 ? 1 : gradStop, (0, ColorUtils_1.getStyleFromRgb)(midRgb, opacity));
      grad.addColorStop(1, (0, ColorUtils_1.getStyleFromHsl)(color2, opacity));
      return grad;
    }
    exports.gradient = gradient;
    function drawGrabLine(context, width, begin, end, colorLine, opacity) {
      context.save();
      drawLine(context, begin, end);
      context.strokeStyle = (0, ColorUtils_1.getStyleFromRgb)(colorLine, opacity);
      context.lineWidth = width;
      context.stroke();
      context.restore();
    }
    exports.drawGrabLine = drawGrabLine;
    function drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow, gradient2) {
      var _a, _b, _c, _d, _e, _f;
      const pos = particle.getPosition();
      const tiltOptions = particle.options.tilt;
      const rollOptions = particle.options.roll;
      context.save();
      if (tiltOptions.enable || rollOptions.enable) {
        const roll = rollOptions.enable && particle.roll;
        const tilt = tiltOptions.enable && particle.tilt;
        const rollHorizontal = roll && (rollOptions.mode === Enums_1.RollMode.horizontal || rollOptions.mode === Enums_1.RollMode.both);
        const rollVertical = roll && (rollOptions.mode === Enums_1.RollMode.vertical || rollOptions.mode === Enums_1.RollMode.both);
        context.setTransform(rollHorizontal ? Math.cos(particle.roll.angle) : 1, tilt ? Math.cos(particle.tilt.value) * particle.tilt.cosDirection : 0, tilt ? Math.sin(particle.tilt.value) * particle.tilt.sinDirection : 0, rollVertical ? Math.sin(particle.roll.angle) : 1, pos.x, pos.y);
      } else {
        context.translate(pos.x, pos.y);
      }
      context.beginPath();
      const angle = ((_b = (_a = particle.rotate) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0) + (particle.options.rotate.path ? particle.velocity.angle : 0);
      if (angle !== 0) {
        context.rotate(angle);
      }
      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }
      const shadowColor = particle.shadowColor;
      if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = (0, ColorUtils_1.getStyleFromRgb)(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
      }
      if (gradient2) {
        const gradientAngle = gradient2.angle.value;
        const fillGradient = gradient2.type === Enums_1.GradientType.radial ? context.createRadialGradient(0, 0, 0, 0, 0, radius) : context.createLinearGradient(Math.cos(gradientAngle) * -radius, Math.sin(gradientAngle) * -radius, Math.cos(gradientAngle) * radius, Math.sin(gradientAngle) * radius);
        for (const color of gradient2.colors) {
          fillGradient.addColorStop(color.stop, (0, ColorUtils_1.getStyleFromHsl)({
            h: color.value.h.value,
            s: color.value.s.value,
            l: color.value.l.value
          }, (_d = (_c = color.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : opacity));
        }
        context.fillStyle = fillGradient;
      } else {
        if (fillColorValue) {
          context.fillStyle = fillColorValue;
        }
      }
      const stroke = particle.stroke;
      context.lineWidth = (_e = particle.strokeWidth) !== null && _e !== void 0 ? _e : 0;
      if (strokeColorValue) {
        context.strokeStyle = strokeColorValue;
      }
      drawShape(container, context, particle, radius, opacity, delta);
      if (((_f = stroke === null || stroke === void 0 ? void 0 : stroke.width) !== null && _f !== void 0 ? _f : 0) > 0) {
        context.stroke();
      }
      if (particle.close) {
        context.closePath();
      }
      if (particle.fill) {
        context.fill();
      }
      context.restore();
      context.save();
      if (tiltOptions.enable && particle.tilt) {
        context.setTransform(1, Math.cos(particle.tilt.value) * particle.tilt.cosDirection, Math.sin(particle.tilt.value) * particle.tilt.sinDirection, 1, pos.x, pos.y);
      } else {
        context.translate(pos.x, pos.y);
      }
      if (angle !== 0) {
        context.rotate(angle);
      }
      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }
      drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
      context.restore();
    }
    exports.drawParticle = drawParticle;
    function drawShape(container, context, particle, radius, opacity, delta) {
      if (!particle.shape) {
        return;
      }
      const drawer = container.drawers.get(particle.shape);
      if (!drawer) {
        return;
      }
      drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
    }
    exports.drawShape = drawShape;
    function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
      if (!particle.shape) {
        return;
      }
      const drawer = container.drawers.get(particle.shape);
      if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
        return;
      }
      drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
    }
    exports.drawShapeAfterEffect = drawShapeAfterEffect;
    function drawPlugin(context, plugin, delta) {
      if (!plugin.draw) {
        return;
      }
      context.save();
      plugin.draw(context, delta);
      context.restore();
    }
    exports.drawPlugin = drawPlugin;
    function drawParticlePlugin(context, plugin, particle, delta) {
      if (plugin.drawParticle !== void 0) {
        context.save();
        plugin.drawParticle(context, particle, delta);
        context.restore();
      }
    }
    exports.drawParticlePlugin = drawParticlePlugin;
    function drawEllipse(context, particle, fillColorValue, radius, opacity, width, rotation, start, end) {
      const pos = particle.getPosition();
      if (fillColorValue) {
        context.strokeStyle = (0, ColorUtils_1.getStyleFromHsl)(fillColorValue, opacity);
      }
      if (width === 0) {
        return;
      }
      context.lineWidth = width;
      const rotationRadian = rotation * Math.PI / 180;
      context.beginPath();
      context.ellipse(pos.x, pos.y, radius / 2, radius * 2, rotationRadian, start, end);
      context.stroke();
    }
    exports.drawEllipse = drawEllipse;
    function alterHsl(color, type, value) {
      return {
        h: color.h,
        s: color.s,
        l: color.l + (type === Enums_1.AlterType.darken ? -1 : 1) * value
      };
    }
    exports.alterHsl = alterHsl;
  }
});

// node_modules/tsparticles/Utils/Range.js
var require_Range = __commonJS({
  "node_modules/tsparticles/Utils/Range.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Range = void 0;
    var Range = class {
      constructor(x, y) {
        this.position = {
          x,
          y
        };
      }
    };
    exports.Range = Range;
  }
});

// node_modules/tsparticles/Utils/Circle.js
var require_Circle = __commonJS({
  "node_modules/tsparticles/Utils/Circle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Circle = void 0;
    var Range_1 = require_Range();
    var NumberUtils_1 = require_NumberUtils();
    var Circle = class extends Range_1.Range {
      constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
      }
      contains(point) {
        return (0, NumberUtils_1.getDistance)(point, this.position) <= this.radius;
      }
      intersects(range) {
        const rect = range;
        const circle = range;
        const pos1 = this.position;
        const pos2 = range.position;
        const xDist = Math.abs(pos2.x - pos1.x);
        const yDist = Math.abs(pos2.y - pos1.y);
        const r = this.radius;
        if (circle.radius !== void 0) {
          const rSum = r + circle.radius;
          const dist = Math.sqrt(xDist * xDist + yDist + yDist);
          return rSum > dist;
        } else if (rect.size !== void 0) {
          const w = rect.size.width;
          const h = rect.size.height;
          const edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
          if (xDist > r + w || yDist > r + h) {
            return false;
          }
          if (xDist <= w || yDist <= h) {
            return true;
          }
          return edges <= r * r;
        }
        return false;
      }
    };
    exports.Circle = Circle;
  }
});

// node_modules/tsparticles/Utils/Rectangle.js
var require_Rectangle = __commonJS({
  "node_modules/tsparticles/Utils/Rectangle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rectangle = void 0;
    var Range_1 = require_Range();
    var Rectangle = class extends Range_1.Range {
      constructor(x, y, width, height) {
        super(x, y);
        this.size = {
          height,
          width
        };
      }
      contains(point) {
        const w = this.size.width;
        const h = this.size.height;
        const pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
      }
      intersects(range) {
        const rect = range;
        const circle = range;
        const w = this.size.width;
        const h = this.size.height;
        const pos1 = this.position;
        const pos2 = range.position;
        if (circle.radius !== void 0) {
          return circle.intersects(this);
        } else if (rect.size !== void 0) {
          const size2 = rect.size;
          const w2 = size2.width;
          const h2 = size2.height;
          return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
        }
        return false;
      }
    };
    exports.Rectangle = Rectangle;
  }
});

// node_modules/tsparticles/Utils/CircleWarp.js
var require_CircleWarp = __commonJS({
  "node_modules/tsparticles/Utils/CircleWarp.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CircleWarp = void 0;
    var Rectangle_1 = require_Rectangle();
    var Circle_1 = require_Circle();
    var CircleWarp = class extends Circle_1.Circle {
      constructor(x, y, radius, canvasSize) {
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = {
          height: canvasSize.height,
          width: canvasSize.width
        };
      }
      contains(point) {
        if (super.contains(point)) {
          return true;
        }
        const posNE = {
          x: point.x - this.canvasSize.width,
          y: point.y
        };
        if (super.contains(posNE)) {
          return true;
        }
        const posSE = {
          x: point.x - this.canvasSize.width,
          y: point.y - this.canvasSize.height
        };
        if (super.contains(posSE)) {
          return true;
        }
        const posSW = {
          x: point.x,
          y: point.y - this.canvasSize.height
        };
        return super.contains(posSW);
      }
      intersects(range) {
        if (super.intersects(range)) {
          return true;
        }
        const rect = range;
        const circle = range;
        const newPos = {
          x: range.position.x - this.canvasSize.width,
          y: range.position.y - this.canvasSize.height
        };
        if (circle.radius !== void 0) {
          const biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
          return super.intersects(biggerCircle);
        } else if (rect.size !== void 0) {
          const rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
          return super.intersects(rectSW);
        }
        return false;
      }
    };
    exports.CircleWarp = CircleWarp;
  }
});

// node_modules/tsparticles/Utils/EventListeners.js
var require_EventListeners = __commonJS({
  "node_modules/tsparticles/Utils/EventListeners.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventListeners = void 0;
    var Enums_1 = require_Enums();
    var Constants_1 = require_Constants();
    var Utils_1 = require_Utils();
    function manageListener(element, event, handler, add, options) {
      if (add) {
        let addOptions = { passive: true };
        if (typeof options === "boolean") {
          addOptions.capture = options;
        } else if (options !== void 0) {
          addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
      } else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
      }
    }
    var EventListeners = class {
      constructor(container) {
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchStartHandler = (e) => this.mouseTouchMove(e);
        this.touchMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchEndHandler = () => this.mouseTouchFinish();
        this.mouseLeaveHandler = () => this.mouseTouchFinish();
        this.touchCancelHandler = () => this.mouseTouchFinish();
        this.touchEndClickHandler = (e) => this.mouseTouchClick(e);
        this.mouseUpHandler = (e) => this.mouseTouchClick(e);
        this.mouseDownHandler = () => this.mouseDown();
        this.visibilityChangeHandler = () => this.handleVisibilityChange();
        this.themeChangeHandler = (e) => this.handleThemeChange(e);
        this.resizeHandler = () => this.handleWindowResize();
      }
      addListeners() {
        this.manageListeners(true);
      }
      removeListeners() {
        this.manageListeners(false);
      }
      manageListeners(add) {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const detectType = options.interactivity.detectsOn;
        let mouseLeaveEvent = Constants_1.Constants.mouseLeaveEvent;
        if (detectType === Enums_1.InteractivityDetect.window) {
          container.interactivity.element = window;
          mouseLeaveEvent = Constants_1.Constants.mouseOutEvent;
        } else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
          const canvasEl = container.canvas.element;
          container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
        } else {
          container.interactivity.element = container.canvas.element;
        }
        const mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)");
        if (mediaMatch) {
          manageListener(mediaMatch, "change", this.themeChangeHandler, add);
        }
        const interactivityEl = container.interactivity.element;
        if (!interactivityEl) {
          return;
        }
        const html = interactivityEl;
        if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
          manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
          manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
          manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
          if (!options.interactivity.events.onClick.enable) {
            manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
          } else {
            manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.mouseDownEvent, this.mouseDownHandler, add);
          }
          manageListener(interactivityEl, mouseLeaveEvent, this.mouseLeaveHandler, add);
          manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (container.canvas.element) {
          container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
        }
        if (options.interactivity.events.resize) {
          if (typeof ResizeObserver !== "undefined") {
            if (this.resizeObserver && !add) {
              if (container.canvas.element) {
                this.resizeObserver.unobserve(container.canvas.element);
              }
              this.resizeObserver.disconnect();
              delete this.resizeObserver;
            } else if (!this.resizeObserver && add && container.canvas.element) {
              this.resizeObserver = new ResizeObserver((entries) => {
                const entry = entries.find((e) => e.target === container.canvas.element);
                if (!entry) {
                  return;
                }
                this.handleWindowResize();
              });
              this.resizeObserver.observe(container.canvas.element);
            }
          } else {
            manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
          }
        }
        if (document) {
          manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
      }
      handleWindowResize() {
        if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout);
          delete this.resizeTimeout;
        }
        this.resizeTimeout = setTimeout(() => {
          var _a;
          return (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
        }, 500);
      }
      handleVisibilityChange() {
        const container = this.container;
        const options = container.actualOptions;
        this.mouseTouchFinish();
        if (!options.pauseOnBlur) {
          return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
          container.pageHidden = true;
          container.pause();
        } else {
          container.pageHidden = false;
          if (container.getAnimationStatus()) {
            container.play(true);
          } else {
            container.draw(true);
          }
        }
      }
      mouseDown() {
        const interactivity = this.container.interactivity;
        if (interactivity) {
          const mouse = interactivity.mouse;
          mouse.clicking = true;
          mouse.downPosition = mouse.position;
        }
      }
      mouseTouchMove(e) {
        var _a, _b, _c, _d, _e, _f, _g;
        const container = this.container;
        const options = container.actualOptions;
        if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === void 0) {
          return;
        }
        container.interactivity.mouse.inside = true;
        let pos;
        const canvas = container.canvas.element;
        if (e.type.startsWith("mouse")) {
          this.canPush = true;
          const mouseEvent = e;
          if (container.interactivity.element === window) {
            if (canvas) {
              const clientRect = canvas.getBoundingClientRect();
              pos = {
                x: mouseEvent.clientX - clientRect.left,
                y: mouseEvent.clientY - clientRect.top
              };
            }
          } else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
            const source = mouseEvent.target;
            const target = mouseEvent.currentTarget;
            const canvasEl = container.canvas.element;
            if (source && target && canvasEl) {
              const sourceRect = source.getBoundingClientRect();
              const targetRect = target.getBoundingClientRect();
              const canvasRect = canvasEl.getBoundingClientRect();
              pos = {
                x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
              };
            } else {
              pos = {
                x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
                y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY
              };
            }
          } else {
            if (mouseEvent.target === container.canvas.element) {
              pos = {
                x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
                y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY
              };
            }
          }
        } else {
          this.canPush = e.type !== "touchmove";
          const touchEvent = e;
          const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
          const canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
          pos = {
            x: lastTouch.clientX - ((_f = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _f !== void 0 ? _f : 0),
            y: lastTouch.clientY - ((_g = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _g !== void 0 ? _g : 0)
          };
        }
        const pxRatio = container.retina.pixelRatio;
        if (pos) {
          pos.x *= pxRatio;
          pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
      }
      mouseTouchFinish() {
        const interactivity = this.container.interactivity;
        if (interactivity === void 0) {
          return;
        }
        const mouse = interactivity.mouse;
        delete mouse.position;
        delete mouse.clickPosition;
        delete mouse.downPosition;
        interactivity.status = Constants_1.Constants.mouseLeaveEvent;
        mouse.inside = false;
        mouse.clicking = false;
      }
      mouseTouchClick(e) {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        mouse.inside = true;
        let handled = false;
        const mousePosition = mouse.position;
        if (mousePosition === void 0 || !options.interactivity.events.onClick.enable) {
          return;
        }
        for (const [, plugin] of container.plugins) {
          if (plugin.clickPositionValid !== void 0) {
            handled = plugin.clickPositionValid(mousePosition);
            if (handled) {
              break;
            }
          }
        }
        if (!handled) {
          this.doMouseTouchClick(e);
        }
        mouse.clicking = false;
      }
      doMouseTouchClick(e) {
        const container = this.container;
        const options = container.actualOptions;
        if (this.canPush) {
          const mousePos = container.interactivity.mouse.position;
          if (mousePos) {
            container.interactivity.mouse.clickPosition = {
              x: mousePos.x,
              y: mousePos.y
            };
          } else {
            return;
          }
          container.interactivity.mouse.clickTime = new Date().getTime();
          const onClick = options.interactivity.events.onClick;
          if (onClick.mode instanceof Array) {
            for (const mode of onClick.mode) {
              this.handleClickMode(mode);
            }
          } else {
            this.handleClickMode(onClick.mode);
          }
        }
        if (e.type === "touchend") {
          setTimeout(() => this.mouseTouchFinish(), 500);
        }
      }
      handleThemeChange(e) {
        const mediaEvent = e;
        const themeName = mediaEvent.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme;
        const theme = this.container.options.themes.find((theme2) => theme2.name === themeName);
        if (theme && theme.default.auto) {
          this.container.loadTheme(themeName);
        }
      }
      handleClickMode(mode) {
        const container = this.container;
        const options = container.actualOptions;
        const pushNb = options.interactivity.modes.push.quantity;
        const removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
          case Enums_1.ClickMode.push: {
            if (pushNb > 0) {
              const pushOptions = options.interactivity.modes.push;
              const group = (0, Utils_1.itemFromArray)([void 0, ...pushOptions.groups]);
              const groupOptions = group !== void 0 ? container.actualOptions.particles.groups[group] : void 0;
              container.particles.push(pushNb, container.interactivity.mouse, groupOptions, group);
            }
            break;
          }
          case Enums_1.ClickMode.remove:
            container.particles.removeQuantity(removeNb);
            break;
          case Enums_1.ClickMode.bubble:
            container.bubble.clicking = true;
            break;
          case Enums_1.ClickMode.repulse:
            container.repulse.clicking = true;
            container.repulse.count = 0;
            for (const particle of container.repulse.particles) {
              particle.velocity.setTo(particle.initialVelocity);
            }
            container.repulse.particles = [];
            container.repulse.finish = false;
            setTimeout(() => {
              if (!container.destroyed) {
                container.repulse.clicking = false;
              }
            }, options.interactivity.modes.repulse.duration * 1e3);
            break;
          case Enums_1.ClickMode.attract:
            container.attract.clicking = true;
            container.attract.count = 0;
            for (const particle of container.attract.particles) {
              particle.velocity.setTo(particle.initialVelocity);
            }
            container.attract.particles = [];
            container.attract.finish = false;
            setTimeout(() => {
              if (!container.destroyed) {
                container.attract.clicking = false;
              }
            }, options.interactivity.modes.attract.duration * 1e3);
            break;
          case Enums_1.ClickMode.pause:
            if (container.getAnimationStatus()) {
              container.pause();
            } else {
              container.play();
            }
            break;
        }
        for (const [, plugin] of container.plugins) {
          if (plugin.handleClickMode) {
            plugin.handleClickMode(mode);
          }
        }
      }
    };
    exports.EventListeners = EventListeners;
  }
});

// node_modules/tsparticles/Utils/Plugins.js
var require_Plugins = __commonJS({
  "node_modules/tsparticles/Utils/Plugins.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plugins = void 0;
    var plugins = [];
    var interactorsInitializers = /* @__PURE__ */ new Map();
    var updatersInitializers = /* @__PURE__ */ new Map();
    var interactors = /* @__PURE__ */ new Map();
    var updaters = /* @__PURE__ */ new Map();
    var presets = /* @__PURE__ */ new Map();
    var drawers = /* @__PURE__ */ new Map();
    var pathGenerators = /* @__PURE__ */ new Map();
    var Plugins = class {
      static getPlugin(plugin) {
        return plugins.find((t) => t.id === plugin);
      }
      static addPlugin(plugin) {
        if (!Plugins.getPlugin(plugin.id)) {
          plugins.push(plugin);
        }
      }
      static getAvailablePlugins(container) {
        const res = /* @__PURE__ */ new Map();
        for (const plugin of plugins) {
          if (!plugin.needsPlugin(container.actualOptions)) {
            continue;
          }
          res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
      }
      static loadOptions(options, sourceOptions) {
        for (const plugin of plugins) {
          plugin.loadOptions(options, sourceOptions);
        }
      }
      static getPreset(preset) {
        return presets.get(preset);
      }
      static addPreset(presetKey, options, override = false) {
        if (override || !Plugins.getPreset(presetKey)) {
          presets.set(presetKey, options);
        }
      }
      static addShapeDrawer(type, drawer) {
        if (!Plugins.getShapeDrawer(type)) {
          drawers.set(type, drawer);
        }
      }
      static getShapeDrawer(type) {
        return drawers.get(type);
      }
      static getSupportedShapes() {
        return drawers.keys();
      }
      static getPathGenerator(type) {
        return pathGenerators.get(type);
      }
      static addPathGenerator(type, pathGenerator) {
        if (!Plugins.getPathGenerator(type)) {
          pathGenerators.set(type, pathGenerator);
        }
      }
      static getInteractors(container) {
        let res = interactors.get(container);
        if (!res) {
          res = [...interactorsInitializers.values()].map((t) => t(container));
          interactors.set(container, res);
        }
        return res;
      }
      static addInteractor(name, initInteractor) {
        interactorsInitializers.set(name, initInteractor);
      }
      static getUpdaters(container) {
        let res = updaters.get(container);
        if (!res) {
          res = [...updatersInitializers.values()].map((t) => t(container));
          updaters.set(container, res);
        }
        return res;
      }
      static addParticleUpdater(name, initUpdater) {
        updatersInitializers.set(name, initUpdater);
      }
    };
    exports.Plugins = Plugins;
  }
});

// node_modules/tsparticles/Utils/Point.js
var require_Point = __commonJS({
  "node_modules/tsparticles/Utils/Point.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Point = void 0;
    var Point = class {
      constructor(position, particle) {
        this.position = position;
        this.particle = particle;
      }
    };
    exports.Point = Point;
  }
});

// node_modules/tsparticles/Utils/QuadTree.js
var require_QuadTree = __commonJS({
  "node_modules/tsparticles/Utils/QuadTree.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QuadTree = void 0;
    var Rectangle_1 = require_Rectangle();
    var Circle_1 = require_Circle();
    var CircleWarp_1 = require_CircleWarp();
    var NumberUtils_1 = require_NumberUtils();
    var QuadTree = class {
      constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
      }
      subdivide() {
        const x = this.rectangle.position.x;
        const y = this.rectangle.position.y;
        const w = this.rectangle.size.width;
        const h = this.rectangle.size.height;
        const capacity = this.capacity;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
        this.divided = true;
      }
      insert(point) {
        var _a, _b, _c, _d, _e;
        if (!this.rectangle.contains(point.position)) {
          return false;
        }
        if (this.points.length < this.capacity) {
          this.points.push(point);
          return true;
        }
        if (!this.divided) {
          this.subdivide();
        }
        return (_e = ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point))) !== null && _e !== void 0 ? _e : false;
      }
      queryCircle(position, radius) {
        return this.query(new Circle_1.Circle(position.x, position.y, radius));
      }
      queryCircleWarp(position, radius, containerOrSize) {
        const container = containerOrSize;
        const size = containerOrSize;
        return this.query(new CircleWarp_1.CircleWarp(position.x, position.y, radius, container.canvas !== void 0 ? container.canvas.size : size));
      }
      queryRectangle(position, size) {
        return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height));
      }
      query(range, found) {
        var _a, _b, _c, _d;
        const res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
          return [];
        } else {
          for (const p of this.points) {
            if (!range.contains(p.position) && (0, NumberUtils_1.getDistance)(range.position, p.position) > p.particle.getRadius()) {
              continue;
            }
            res.push(p.particle);
          }
          if (this.divided) {
            (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
            (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
            (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
            (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
          }
        }
        return res;
      }
    };
    exports.QuadTree = QuadTree;
  }
});

// node_modules/tsparticles/Utils/index.js
var require_Utils2 = __commonJS({
  "node_modules/tsparticles/Utils/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_CanvasUtils(), exports);
    __exportStar(require_Circle(), exports);
    __exportStar(require_CircleWarp(), exports);
    __exportStar(require_ColorUtils(), exports);
    __exportStar(require_Constants(), exports);
    __exportStar(require_EventListeners(), exports);
    __exportStar(require_NumberUtils(), exports);
    __exportStar(require_Plugins(), exports);
    __exportStar(require_Point(), exports);
    __exportStar(require_QuadTree(), exports);
    __exportStar(require_Range(), exports);
    __exportStar(require_Rectangle(), exports);
    __exportStar(require_Utils(), exports);
  }
});

// node_modules/tsparticles/Core/Canvas.js
var require_Canvas = __commonJS({
  "node_modules/tsparticles/Core/Canvas.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Canvas = void 0;
    var Utils_1 = require_Utils2();
    var Utils_2 = require_Utils2();
    var Canvas = class {
      constructor(container) {
        this.container = container;
        this.size = {
          height: 0,
          width: 0
        };
        this.context = null;
        this.generatedCanvas = false;
      }
      init() {
        this.resize();
        this.initStyle();
        this.initCover();
        this.initTrail();
        this.initBackground();
        this.paint();
      }
      loadCanvas(canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
          canvas.className = Utils_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
          (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : this.generatedCanvas;
        this.element = canvas;
        this.originalStyle = (0, Utils_1.deepExtend)({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
      }
      destroy() {
        var _a;
        if (this.generatedCanvas) {
          (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.draw((ctx) => {
          (0, Utils_2.clear)(ctx, this.size);
        });
      }
      paint() {
        const options = this.container.actualOptions;
        this.draw((ctx) => {
          if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
            (0, Utils_2.clear)(ctx, this.size);
            this.paintBase((0, Utils_1.getStyleFromRgb)(this.coverColor, this.coverColor.a));
          } else {
            this.paintBase();
          }
        });
      }
      clear() {
        const options = this.container.actualOptions;
        const trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
          this.paint();
        } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
          this.paintBase((0, Utils_1.getStyleFromRgb)(this.trailFillColor, 1 / trail.length));
        } else {
          this.draw((ctx) => {
            (0, Utils_2.clear)(ctx, this.size);
          });
        }
      }
      windowResize() {
        var _a;
        if (!this.element) {
          return;
        }
        const container = this.container;
        this.resize();
        if (((_a = this.resizeFactor) === null || _a === void 0 ? void 0 : _a.width) === 1 && this.resizeFactor.height === 1) {
          delete this.resizeFactor;
          return;
        }
        container.updateActualOptions();
        container.particles.setDensity();
        for (const [, plugin] of container.plugins) {
          if (plugin.resize !== void 0) {
            plugin.resize();
          }
        }
      }
      resize() {
        if (!this.element) {
          return;
        }
        const container = this.container;
        const pxRatio = container.retina.pixelRatio;
        const size = container.canvas.size;
        const oldSize = {
          width: size.width,
          height: size.height
        };
        size.width = this.element.offsetWidth * pxRatio;
        size.height = this.element.offsetHeight * pxRatio;
        this.element.width = size.width;
        this.element.height = size.height;
        if (this.container.started) {
          this.resizeFactor = {
            width: size.width / oldSize.width,
            height: size.height / oldSize.height
          };
        }
      }
      drawConnectLine(p1, p2) {
        this.draw((ctx) => {
          var _a;
          const lineStyle = this.lineStyle(p1, p2);
          if (!lineStyle) {
            return;
          }
          const pos1 = p1.getPosition();
          const pos2 = p2.getPosition();
          (0, Utils_1.drawConnectLine)(ctx, (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
        });
      }
      drawGrabLine(particle, lineColor, opacity, mousePos) {
        const container = this.container;
        this.draw((ctx) => {
          var _a;
          const beginPos = particle.getPosition();
          (0, Utils_1.drawGrabLine)(ctx, (_a = particle.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
        });
      }
      drawParticle(particle, delta) {
        var _a, _b, _c, _d, _e, _f;
        if (particle.spawning || particle.destroyed) {
          return;
        }
        const pfColor = particle.getFillColor();
        const psColor = (_a = particle.getStrokeColor()) !== null && _a !== void 0 ? _a : pfColor;
        if (!pfColor && !psColor) {
          return;
        }
        let [fColor, sColor] = this.getPluginParticleColors(particle);
        const pOptions = particle.options;
        const twinkle = pOptions.twinkle.particles;
        const twinkling = twinkle.enable && Math.random() < twinkle.frequency;
        if (!fColor || !sColor) {
          const twinkleRgb = (0, Utils_1.colorToHsl)(twinkle.color);
          if (!fColor) {
            fColor = twinkling && twinkleRgb !== void 0 ? twinkleRgb : pfColor ? pfColor : void 0;
          }
          if (!sColor) {
            sColor = twinkling && twinkleRgb !== void 0 ? twinkleRgb : psColor ? psColor : void 0;
          }
        }
        const options = this.container.actualOptions;
        const zIndexOptions = particle.options.zIndex;
        const zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate;
        const radius = particle.getRadius();
        const opacity = twinkling ? twinkle.opacity : (_d = (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : (_c = particle.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 1;
        const strokeOpacity = (_f = (_e = particle.stroke) === null || _e === void 0 ? void 0 : _e.opacity) !== null && _f !== void 0 ? _f : opacity;
        const zOpacity = opacity * zOpacityFactor;
        const fillColorValue = fColor ? (0, Utils_1.getStyleFromHsl)(fColor, zOpacity) : void 0;
        if (!fillColorValue && !sColor) {
          return;
        }
        this.draw((ctx) => {
          const zSizeFactor = (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate;
          const zStrokeOpacity = strokeOpacity * zOpacityFactor;
          const strokeColorValue = sColor ? (0, Utils_1.getStyleFromHsl)(sColor, zStrokeOpacity) : fillColorValue;
          if (radius <= 0) {
            return;
          }
          const container = this.container;
          for (const updater of container.particles.updaters) {
            if (updater.beforeDraw) {
              updater.beforeDraw(particle);
            }
          }
          (0, Utils_1.drawParticle)(this.container, ctx, particle, delta, fillColorValue, strokeColorValue, options.backgroundMask.enable, options.backgroundMask.composite, radius * zSizeFactor, zOpacity, particle.options.shadow, particle.gradient);
          for (const updater of container.particles.updaters) {
            if (updater.afterDraw) {
              updater.afterDraw(particle);
            }
          }
        });
      }
      drawPlugin(plugin, delta) {
        this.draw((ctx) => {
          (0, Utils_1.drawPlugin)(ctx, plugin, delta);
        });
      }
      drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx) => {
          (0, Utils_1.drawParticlePlugin)(ctx, plugin, particle, delta);
        });
      }
      initBackground() {
        const options = this.container.actualOptions;
        const background = options.background;
        const element = this.element;
        const elementStyle = element === null || element === void 0 ? void 0 : element.style;
        if (!elementStyle) {
          return;
        }
        if (background.color) {
          const color = (0, Utils_1.colorToRgb)(background.color);
          elementStyle.backgroundColor = color ? (0, Utils_1.getStyleFromRgb)(color, background.opacity) : "";
        } else {
          elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
      }
      draw(cb) {
        if (!this.context) {
          return;
        }
        return cb(this.context);
      }
      initCover() {
        const options = this.container.actualOptions;
        const cover = options.backgroundMask.cover;
        const color = cover.color;
        const coverRgb = (0, Utils_1.colorToRgb)(color);
        if (coverRgb) {
          this.coverColor = {
            r: coverRgb.r,
            g: coverRgb.g,
            b: coverRgb.b,
            a: cover.opacity
          };
        }
      }
      initTrail() {
        const options = this.container.actualOptions;
        const trail = options.particles.move.trail;
        const fillColor = (0, Utils_1.colorToRgb)(trail.fillColor);
        if (fillColor) {
          const trail2 = options.particles.move.trail;
          this.trailFillColor = {
            r: fillColor.r,
            g: fillColor.g,
            b: fillColor.b,
            a: 1 / trail2.length
          };
        }
      }
      getPluginParticleColors(particle) {
        let fColor;
        let sColor;
        for (const [, plugin] of this.container.plugins) {
          if (!fColor && plugin.particleFillColor) {
            fColor = (0, Utils_1.colorToHsl)(plugin.particleFillColor(particle));
          }
          if (!sColor && plugin.particleStrokeColor) {
            sColor = (0, Utils_1.colorToHsl)(plugin.particleStrokeColor(particle));
          }
          if (fColor && sColor) {
            break;
          }
        }
        return [fColor, sColor];
      }
      initStyle() {
        const element = this.element, options = this.container.actualOptions;
        if (!element) {
          return;
        }
        const originalStyle = this.originalStyle;
        if (options.fullScreen.enable) {
          this.originalStyle = (0, Utils_1.deepExtend)({}, element.style);
          element.style.position = "fixed";
          element.style.zIndex = options.fullScreen.zIndex.toString(10);
          element.style.top = "0";
          element.style.left = "0";
          element.style.width = "100%";
          element.style.height = "100%";
        } else if (originalStyle) {
          element.style.position = originalStyle.position;
          element.style.zIndex = originalStyle.zIndex;
          element.style.top = originalStyle.top;
          element.style.left = originalStyle.left;
          element.style.width = originalStyle.width;
          element.style.height = originalStyle.height;
        }
      }
      paintBase(baseColor) {
        this.draw((ctx) => {
          (0, Utils_1.paintBase)(ctx, this.size, baseColor);
        });
      }
      lineStyle(p1, p2) {
        return this.draw((ctx) => {
          const options = this.container.actualOptions;
          const connectOptions = options.interactivity.modes.connect;
          return (0, Utils_1.gradient)(ctx, p1, p2, connectOptions.links.opacity);
        });
      }
    };
    exports.Canvas = Canvas;
  }
});

// node_modules/tsparticles/Options/Classes/OptionsColor.js
var require_OptionsColor = __commonJS({
  "node_modules/tsparticles/Options/Classes/OptionsColor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OptionsColor = void 0;
    var OptionsColor = class {
      constructor() {
        this.value = "#fff";
      }
      static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== void 0) {
          if (typeof data === "string" || data instanceof Array) {
            color.load({ value: data });
          } else {
            color.load(data);
          }
        }
        return color;
      }
      load(data) {
        if ((data === null || data === void 0 ? void 0 : data.value) === void 0) {
          return;
        }
        this.value = data.value;
      }
    };
    exports.OptionsColor = OptionsColor;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Links/LinksShadow.js
var require_LinksShadow = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Links/LinksShadow.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinksShadow = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var LinksShadow = class {
      constructor() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "#00ff00";
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.blur !== void 0) {
          this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
      }
    };
    exports.LinksShadow = LinksShadow;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Links/LinksTriangle.js
var require_LinksTriangle = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Links/LinksTriangle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinksTriangle = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var LinksTriangle = class {
      constructor() {
        this.enable = false;
        this.frequency = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.frequency !== void 0) {
          this.frequency = data.frequency;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports.LinksTriangle = LinksTriangle;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Links/Links.js
var require_Links = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Links/Links.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Links = void 0;
    var LinksShadow_1 = require_LinksShadow();
    var LinksTriangle_1 = require_LinksTriangle();
    var OptionsColor_1 = require_OptionsColor();
    var Links = class {
      constructor() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.id !== void 0) {
          this.id = data.id;
        }
        if (data.blink !== void 0) {
          this.blink = data.blink;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.consent !== void 0) {
          this.consent = data.consent;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.frequency !== void 0) {
          this.frequency = data.frequency;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== void 0) {
          this.width = data.width;
        }
        if (data.warp !== void 0) {
          this.warp = data.warp;
        }
      }
    };
    exports.Links = Links;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/Attract.js
var require_Attract = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/Attract.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Attract = void 0;
    var Attract = class {
      constructor() {
        this.distance = 200;
        this.enable = false;
        this.rotate = {
          x: 3e3,
          y: 3e3
        };
      }
      get rotateX() {
        return this.rotate.x;
      }
      set rotateX(value) {
        this.rotate.x = value;
      }
      get rotateY() {
        return this.rotate.y;
      }
      set rotateY(value) {
        this.rotate.y = value;
      }
      load(data) {
        var _a, _b, _c, _d;
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
        if (rotateX !== void 0) {
          this.rotate.x = rotateX;
        }
        const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
        if (rotateY !== void 0) {
          this.rotate.y = rotateY;
        }
      }
    };
    exports.Attract = Attract;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/Trail.js
var require_Trail = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/Trail.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Trail = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var Trail = class {
      constructor() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
        if (data.length !== void 0) {
          this.length = data.length;
        }
      }
    };
    exports.Trail = Trail;
  }
});

// node_modules/tsparticles/Options/Classes/Random.js
var require_Random = __commonJS({
  "node_modules/tsparticles/Options/Classes/Random.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Random = void 0;
    var Random = class {
      constructor() {
        this.enable = false;
        this.minimumValue = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.minimumValue !== void 0) {
          this.minimumValue = data.minimumValue;
        }
      }
    };
    exports.Random = Random;
  }
});

// node_modules/tsparticles/Options/Classes/ValueWithRandom.js
var require_ValueWithRandom = __commonJS({
  "node_modules/tsparticles/Options/Classes/ValueWithRandom.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueWithRandom = void 0;
    var Random_1 = require_Random();
    var Utils_1 = require_Utils2();
    var ValueWithRandom = class {
      constructor() {
        this.random = new Random_1.Random();
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (typeof data.random === "boolean") {
          this.random.enable = data.random;
        } else {
          this.random.load(data.random);
        }
        if (data.value !== void 0) {
          this.value = (0, Utils_1.setRangeValue)(data.value, this.random.enable ? this.random.minimumValue : void 0);
        }
      }
    };
    exports.ValueWithRandom = ValueWithRandom;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/Path/PathDelay.js
var require_PathDelay = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/Path/PathDelay.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PathDelay = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var PathDelay = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
      }
    };
    exports.PathDelay = PathDelay;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/Path/Path.js
var require_Path = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/Path/Path.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Path = void 0;
    var PathDelay_1 = require_PathDelay();
    var Utils_1 = require_Utils2();
    var Path = class {
      constructor() {
        this.clamp = true;
        this.delay = new PathDelay_1.PathDelay();
        this.enable = false;
        this.options = {};
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.clamp !== void 0) {
          this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.generator = data.generator;
        if (data.options) {
          this.options = (0, Utils_1.deepExtend)(this.options, data.options);
        }
      }
    };
    exports.Path = Path;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/MoveAngle.js
var require_MoveAngle = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/MoveAngle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveAngle = void 0;
    var MoveAngle = class {
      constructor() {
        this.offset = 0;
        this.value = 90;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.offset !== void 0) {
          this.offset = data.offset;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports.MoveAngle = MoveAngle;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/MoveGravity.js
var require_MoveGravity = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/MoveGravity.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveGravity = void 0;
    var MoveGravity = class {
      constructor() {
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.acceleration !== void 0) {
          this.acceleration = data.acceleration;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.inverse !== void 0) {
          this.inverse = data.inverse;
        }
        if (data.maxSpeed !== void 0) {
          this.maxSpeed = data.maxSpeed;
        }
      }
    };
    exports.MoveGravity = MoveGravity;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/OutModes.js
var require_OutModes = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/OutModes.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutModes = void 0;
    var Modes_1 = require_Modes();
    var OutModes = class {
      constructor() {
        this.default = Modes_1.OutMode.out;
      }
      load(data) {
        var _a, _b, _c, _d;
        if (!data) {
          return;
        }
        if (data.default !== void 0) {
          this.default = data.default;
        }
        this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
        this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
        this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
        this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
      }
    };
    exports.OutModes = OutModes;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/Spin.js
var require_Spin = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/Spin.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spin = void 0;
    var Utils_1 = require_Utils2();
    var Spin = class {
      constructor() {
        this.acceleration = 0;
        this.enable = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.acceleration !== void 0) {
          this.acceleration = (0, Utils_1.setRangeValue)(data.acceleration);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.position = data.position ? (0, Utils_1.deepExtend)({}, data.position) : void 0;
      }
    };
    exports.Spin = Spin;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Move/Move.js
var require_Move = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Move/Move.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Move = void 0;
    var Attract_1 = require_Attract();
    var Enums_1 = require_Enums();
    var Trail_1 = require_Trail();
    var Path_1 = require_Path();
    var MoveAngle_1 = require_MoveAngle();
    var MoveGravity_1 = require_MoveGravity();
    var OutModes_1 = require_OutModes();
    var Utils_1 = require_Utils2();
    var Spin_1 = require_Spin();
    var Move = class {
      constructor() {
        this.angle = new MoveAngle_1.MoveAngle();
        this.attract = new Attract_1.Attract();
        this.decay = 0;
        this.distance = {};
        this.direction = Enums_1.MoveDirection.none;
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity_1.MoveGravity();
        this.path = new Path_1.Path();
        this.outModes = new OutModes_1.OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new Spin_1.Spin();
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
        this.warp = false;
      }
      get collisions() {
        return false;
      }
      set collisions(value) {
      }
      get bounce() {
        return this.collisions;
      }
      set bounce(value) {
        this.collisions = value;
      }
      get out_mode() {
        return this.outMode;
      }
      set out_mode(value) {
        this.outMode = value;
      }
      get outMode() {
        return this.outModes.default;
      }
      set outMode(value) {
        this.outModes.default = value;
      }
      get noise() {
        return this.path;
      }
      set noise(value) {
        this.path = value;
      }
      load(data) {
        var _a, _b, _c;
        if (data === void 0) {
          return;
        }
        if (data.angle !== void 0) {
          if (typeof data.angle === "number") {
            this.angle.value = data.angle;
          } else {
            this.angle.load(data.angle);
          }
        }
        this.attract.load(data.attract);
        if (data.decay !== void 0) {
          this.decay = data.decay;
        }
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        if (data.distance !== void 0) {
          this.distance = typeof data.distance === "number" ? {
            horizontal: data.distance,
            vertical: data.distance
          } : (0, Utils_1.deepExtend)({}, data.distance);
        }
        if (data.drift !== void 0) {
          this.drift = (0, Utils_1.setRangeValue)(data.drift);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
        if (data.outModes !== void 0 || outMode !== void 0) {
          if (typeof data.outModes === "string" || data.outModes === void 0 && outMode !== void 0) {
            this.outModes.load({
              default: (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode
            });
          } else {
            this.outModes.load(data.outModes);
          }
        }
        this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);
        if (data.random !== void 0) {
          this.random = data.random;
        }
        if (data.size !== void 0) {
          this.size = data.size;
        }
        if (data.speed !== void 0) {
          this.speed = (0, Utils_1.setRangeValue)(data.speed);
        }
        this.spin.load(data.spin);
        if (data.straight !== void 0) {
          this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== void 0) {
          this.vibrate = data.vibrate;
        }
        if (data.warp !== void 0) {
          this.warp = data.warp;
        }
      }
    };
    exports.Move = Move;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Number/Density.js
var require_Density = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Number/Density.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Density = void 0;
    var Density = class {
      constructor() {
        this.enable = false;
        this.area = 800;
        this.factor = 1e3;
      }
      get value_area() {
        return this.area;
      }
      set value_area(value) {
        this.area = value;
      }
      load(data) {
        var _a;
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
        if (area !== void 0) {
          this.area = area;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
      }
    };
    exports.Density = Density;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Number/ParticlesNumber.js
var require_ParticlesNumber = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Number/ParticlesNumber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParticlesNumber = void 0;
    var Density_1 = require_Density();
    var ParticlesNumber = class {
      constructor() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
      }
      get max() {
        return this.limit;
      }
      set max(value) {
        this.limit = value;
      }
      load(data) {
        var _a;
        if (data === void 0) {
          return;
        }
        this.density.load(data.density);
        const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
        if (limit !== void 0) {
          this.limit = limit;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports.ParticlesNumber = ParticlesNumber;
  }
});

// node_modules/tsparticles/Options/Classes/AnimationOptions.js
var require_AnimationOptions = __commonJS({
  "node_modules/tsparticles/Options/Classes/AnimationOptions.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationOptions = void 0;
    var AnimationOptions = class {
      constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.AnimationOptions = AnimationOptions;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Opacity/OpacityAnimation.js
var require_OpacityAnimation = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Opacity/OpacityAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpacityAnimation = void 0;
    var Enums_1 = require_Enums();
    var AnimationOptions_1 = require_AnimationOptions();
    var OpacityAnimation = class extends AnimationOptions_1.AnimationOptions {
      constructor() {
        super();
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.speed = 2;
        this.startValue = Enums_1.StartValueType.random;
        this.sync = false;
      }
      get opacity_min() {
        return this.minimumValue;
      }
      set opacity_min(value) {
        this.minimumValue = value;
      }
      load(data) {
        var _a;
        if (data === void 0) {
          return;
        }
        super.load(data);
        if (data.destroy !== void 0) {
          this.destroy = data.destroy;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.startValue !== void 0) {
          this.startValue = data.startValue;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.OpacityAnimation = OpacityAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Opacity/Opacity.js
var require_Opacity = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Opacity/Opacity.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Opacity = void 0;
    var OpacityAnimation_1 = require_OpacityAnimation();
    var ValueWithRandom_1 = require_ValueWithRandom();
    var Utils_1 = require_Utils2();
    var Opacity = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
      }
      get anim() {
        return this.animation;
      }
      set anim(value) {
        this.animation = value;
      }
      load(data) {
        var _a;
        if (!data) {
          return;
        }
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== void 0) {
          this.animation.load(animation);
          this.value = (0, Utils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
        }
      }
    };
    exports.Opacity = Opacity;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Shape/Shape.js
var require_Shape = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Shape/Shape.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Shape = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    var Shape = class {
      constructor() {
        this.options = {};
        this.type = Enums_1.ShapeType.circle;
      }
      get image() {
        var _a;
        return (_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images];
      }
      set image(value) {
        this.options[Enums_1.ShapeType.image] = value;
        this.options[Enums_1.ShapeType.images] = value;
      }
      get custom() {
        return this.options;
      }
      set custom(value) {
        this.options = value;
      }
      get images() {
        return this.image;
      }
      set images(value) {
        this.image = value;
      }
      get stroke() {
        return [];
      }
      set stroke(_value) {
      }
      get character() {
        var _a;
        return (_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.char];
      }
      set character(value) {
        this.options[Enums_1.ShapeType.character] = value;
        this.options[Enums_1.ShapeType.char] = value;
      }
      get polygon() {
        var _a;
        return (_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star];
      }
      set polygon(value) {
        this.options[Enums_1.ShapeType.polygon] = value;
        this.options[Enums_1.ShapeType.star] = value;
      }
      load(data) {
        var _a, _b, _c;
        if (data === void 0) {
          return;
        }
        const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
        if (options !== void 0) {
          for (const shape in options) {
            const item = options[shape];
            if (item !== void 0) {
              this.options[shape] = (0, Utils_1.deepExtend)((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
            }
          }
        }
        this.loadShape(data.character, Enums_1.ShapeType.character, Enums_1.ShapeType.char, true);
        this.loadShape(data.polygon, Enums_1.ShapeType.polygon, Enums_1.ShapeType.star, false);
        this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, Enums_1.ShapeType.image, Enums_1.ShapeType.images, true);
        if (data.type !== void 0) {
          this.type = data.type;
        }
      }
      loadShape(item, mainKey, altKey, altOverride) {
        var _a, _b, _c, _d;
        if (item === void 0) {
          return;
        }
        if (item instanceof Array) {
          if (!(this.options[mainKey] instanceof Array)) {
            this.options[mainKey] = [];
            if (!this.options[altKey] || altOverride) {
              this.options[altKey] = [];
            }
          }
          this.options[mainKey] = (0, Utils_1.deepExtend)((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);
          if (!this.options[altKey] || altOverride) {
            this.options[altKey] = (0, Utils_1.deepExtend)((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
          }
        } else {
          if (this.options[mainKey] instanceof Array) {
            this.options[mainKey] = {};
            if (!this.options[altKey] || altOverride) {
              this.options[altKey] = {};
            }
          }
          this.options[mainKey] = (0, Utils_1.deepExtend)((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);
          if (!this.options[altKey] || altOverride) {
            this.options[altKey] = (0, Utils_1.deepExtend)((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
          }
        }
      }
    };
    exports.Shape = Shape;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Size/SizeAnimation.js
var require_SizeAnimation = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Size/SizeAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SizeAnimation = void 0;
    var Enums_1 = require_Enums();
    var AnimationOptions_1 = require_AnimationOptions();
    var SizeAnimation = class extends AnimationOptions_1.AnimationOptions {
      constructor() {
        super();
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.speed = 5;
        this.startValue = Enums_1.StartValueType.random;
        this.sync = false;
      }
      get size_min() {
        return this.minimumValue;
      }
      set size_min(value) {
        this.minimumValue = value;
      }
      load(data) {
        var _a;
        if (data === void 0) {
          return;
        }
        super.load(data);
        if (data.destroy !== void 0) {
          this.destroy = data.destroy;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.startValue !== void 0) {
          this.startValue = data.startValue;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.SizeAnimation = SizeAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Size/Size.js
var require_Size = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Size/Size.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Size = void 0;
    var SizeAnimation_1 = require_SizeAnimation();
    var ValueWithRandom_1 = require_ValueWithRandom();
    var Utils_1 = require_Utils2();
    var Size = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
      }
      get anim() {
        return this.animation;
      }
      set anim(value) {
        this.animation = value;
      }
      load(data) {
        var _a;
        if (!data) {
          return;
        }
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== void 0) {
          this.animation.load(animation);
          this.value = (0, Utils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
        }
      }
    };
    exports.Size = Size;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Rotate/RotateAnimation.js
var require_RotateAnimation = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Rotate/RotateAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RotateAnimation = void 0;
    var RotateAnimation = class {
      constructor() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.RotateAnimation = RotateAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Rotate/Rotate.js
var require_Rotate = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Rotate/Rotate.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rotate = void 0;
    var RotateAnimation_1 = require_RotateAnimation();
    var Enums_1 = require_Enums();
    var ValueWithRandom_1 = require_ValueWithRandom();
    var Rotate = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
        this.path = false;
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        this.animation.load(data.animation);
        if (data.path !== void 0) {
          this.path = data.path;
        }
      }
    };
    exports.Rotate = Rotate;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Shadow.js
var require_Shadow = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Shadow.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Shadow = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var Shadow = class {
      constructor() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
          x: 0,
          y: 0
        };
        this.color.value = "#000000";
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.blur !== void 0) {
          this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.offset === void 0) {
          return;
        }
        if (data.offset.x !== void 0) {
          this.offset.x = data.offset.x;
        }
        if (data.offset.y !== void 0) {
          this.offset.y = data.offset.y;
        }
      }
    };
    exports.Shadow = Shadow;
  }
});

// node_modules/tsparticles/Options/Classes/ColorAnimation.js
var require_ColorAnimation = __commonJS({
  "node_modules/tsparticles/Options/Classes/ColorAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorAnimation = void 0;
    var Utils_1 = require_Utils2();
    var ColorAnimation = class {
      constructor() {
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.sync = true;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.offset !== void 0) {
          this.offset = (0, Utils_1.setRangeValue)(data.offset);
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.ColorAnimation = ColorAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/HslAnimation.js
var require_HslAnimation = __commonJS({
  "node_modules/tsparticles/Options/Classes/HslAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HslAnimation = void 0;
    var ColorAnimation_1 = require_ColorAnimation();
    var HslAnimation = class {
      constructor() {
        this.h = new ColorAnimation_1.ColorAnimation();
        this.s = new ColorAnimation_1.ColorAnimation();
        this.l = new ColorAnimation_1.ColorAnimation();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
      }
    };
    exports.HslAnimation = HslAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/AnimatableColor.js
var require_AnimatableColor = __commonJS({
  "node_modules/tsparticles/Options/Classes/AnimatableColor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimatableColor = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var HslAnimation_1 = require_HslAnimation();
    var AnimatableColor = class extends OptionsColor_1.OptionsColor {
      constructor() {
        super();
        this.animation = new HslAnimation_1.HslAnimation();
      }
      static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== void 0) {
          if (typeof data === "string" || data instanceof Array) {
            color.load({ value: data });
          } else {
            color.load(data);
          }
        }
        return color;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== void 0) {
          if (colorAnimation.enable !== void 0) {
            this.animation.h.load(colorAnimation);
          } else {
            this.animation.load(data.animation);
          }
        }
      }
    };
    exports.AnimatableColor = AnimatableColor;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Stroke.js
var require_Stroke = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Stroke.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stroke = void 0;
    var AnimatableColor_1 = require_AnimatableColor();
    var Stroke = class {
      constructor() {
        this.width = 0;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.color !== void 0) {
          this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        }
        if (data.width !== void 0) {
          this.width = data.width;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports.Stroke = Stroke;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Bounce/BounceFactor.js
var require_BounceFactor = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Bounce/BounceFactor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BounceFactor = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var BounceFactor = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
      }
    };
    exports.BounceFactor = BounceFactor;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Bounce/Bounce.js
var require_Bounce = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Bounce/Bounce.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bounce = void 0;
    var BounceFactor_1 = require_BounceFactor();
    var Bounce = class {
      constructor() {
        this.horizontal = new BounceFactor_1.BounceFactor();
        this.vertical = new BounceFactor_1.BounceFactor();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
      }
    };
    exports.Bounce = Bounce;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Collisions/CollisionsOverlap.js
var require_CollisionsOverlap = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Collisions/CollisionsOverlap.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CollisionsOverlap = void 0;
    var CollisionsOverlap = class {
      constructor() {
        this.enable = true;
        this.retries = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.retries !== void 0) {
          this.retries = data.retries;
        }
      }
    };
    exports.CollisionsOverlap = CollisionsOverlap;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Collisions/Collisions.js
var require_Collisions = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Collisions/Collisions.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collisions = void 0;
    var Enums_1 = require_Enums();
    var Bounce_1 = require_Bounce();
    var CollisionsOverlap_1 = require_CollisionsOverlap();
    var Collisions = class {
      constructor() {
        this.bounce = new Bounce_1.Bounce();
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
        this.overlap = new CollisionsOverlap_1.CollisionsOverlap();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.bounce.load(data.bounce);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
      }
    };
    exports.Collisions = Collisions;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Twinkle/TwinkleValues.js
var require_TwinkleValues = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Twinkle/TwinkleValues.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TwinkleValues = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var TwinkleValues = class {
      constructor() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.frequency !== void 0) {
          this.frequency = data.frequency;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports.TwinkleValues = TwinkleValues;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Twinkle/Twinkle.js
var require_Twinkle = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Twinkle/Twinkle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Twinkle = void 0;
    var TwinkleValues_1 = require_TwinkleValues();
    var Twinkle = class {
      constructor() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.lines.load(data.lines);
        this.particles.load(data.particles);
      }
    };
    exports.Twinkle = Twinkle;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Life/LifeDelay.js
var require_LifeDelay = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Life/LifeDelay.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LifeDelay = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var LifeDelay = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.LifeDelay = LifeDelay;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Life/LifeDuration.js
var require_LifeDuration = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Life/LifeDuration.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LifeDuration = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var LifeDuration = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.random.minimumValue = 1e-4;
        this.sync = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        super.load(data);
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.LifeDuration = LifeDuration;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Life/Life.js
var require_Life = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Life/Life.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Life = void 0;
    var LifeDelay_1 = require_LifeDelay();
    var LifeDuration_1 = require_LifeDuration();
    var Life = class {
      constructor() {
        this.count = 0;
        this.delay = new LifeDelay_1.LifeDelay();
        this.duration = new LifeDuration_1.LifeDuration();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        this.delay.load(data.delay);
        this.duration.load(data.duration);
      }
    };
    exports.Life = Life;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Destroy/SplitFactor.js
var require_SplitFactor = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Destroy/SplitFactor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SplitFactor = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var SplitFactor = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.value = 3;
      }
    };
    exports.SplitFactor = SplitFactor;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Destroy/SplitRate.js
var require_SplitRate = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Destroy/SplitRate.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SplitRate = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var SplitRate = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.value = { min: 4, max: 9 };
      }
    };
    exports.SplitRate = SplitRate;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Destroy/Split.js
var require_Split = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Destroy/Split.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Split = void 0;
    var SplitFactor_1 = require_SplitFactor();
    var SplitRate_1 = require_SplitRate();
    var Utils_1 = require_Utils2();
    var Split = class {
      constructor() {
        this.count = 1;
        this.factor = new SplitFactor_1.SplitFactor();
        this.rate = new SplitRate_1.SplitRate();
        this.sizeOffset = true;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        this.factor.load(data.factor);
        this.rate.load(data.rate);
        if (data.particles !== void 0) {
          this.particles = (0, Utils_1.deepExtend)({}, data.particles);
        }
        if (data.sizeOffset !== void 0) {
          this.sizeOffset = data.sizeOffset;
        }
      }
    };
    exports.Split = Split;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Destroy/Destroy.js
var require_Destroy = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Destroy/Destroy.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Destroy = void 0;
    var Enums_1 = require_Enums();
    var Split_1 = require_Split();
    var Destroy = class {
      constructor() {
        this.mode = Enums_1.DestroyMode.none;
        this.split = new Split_1.Split();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        this.split.load(data.split);
      }
    };
    exports.Destroy = Destroy;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Wobble/Wobble.js
var require_Wobble = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Wobble/Wobble.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Wobble = void 0;
    var Utils_1 = require_Utils2();
    var Wobble = class {
      constructor() {
        this.distance = 5;
        this.enable = false;
        this.speed = 50;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = (0, Utils_1.setRangeValue)(data.distance);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = (0, Utils_1.setRangeValue)(data.speed);
        }
      }
    };
    exports.Wobble = Wobble;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Tilt/TiltAnimation.js
var require_TiltAnimation = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Tilt/TiltAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TiltAnimation = void 0;
    var TiltAnimation = class {
      constructor() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.TiltAnimation = TiltAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Tilt/Tilt.js
var require_Tilt = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Tilt/Tilt.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tilt = void 0;
    var TiltAnimation_1 = require_TiltAnimation();
    var Enums_1 = require_Enums();
    var ValueWithRandom_1 = require_ValueWithRandom();
    var Tilt = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new TiltAnimation_1.TiltAnimation();
        this.direction = Enums_1.TiltDirection.clockwise;
        this.enable = false;
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        this.animation.load(data.animation);
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
      }
    };
    exports.Tilt = Tilt;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Roll/RollLight.js
var require_RollLight = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Roll/RollLight.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RollLight = void 0;
    var RollLight = class {
      constructor() {
        this.enable = false;
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports.RollLight = RollLight;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Roll/Roll.js
var require_Roll = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Roll/Roll.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Roll = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var RollLight_1 = require_RollLight();
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var Roll = class {
      constructor() {
        this.darken = new RollLight_1.RollLight();
        this.enable = false;
        this.enlighten = new RollLight_1.RollLight();
        this.mode = Enums_1.RollMode.vertical;
        this.speed = 25;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.backColor !== void 0) {
          this.backColor = OptionsColor_1.OptionsColor.create(this.backColor, data.backColor);
        }
        this.darken.load(data.darken);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.enlighten.load(data.enlighten);
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.speed !== void 0) {
          this.speed = (0, Utils_1.setRangeValue)(data.speed);
        }
      }
    };
    exports.Roll = Roll;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/ZIndex/ZIndex.js
var require_ZIndex = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/ZIndex/ZIndex.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZIndex = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var ZIndex = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        if (data.opacityRate !== void 0) {
          this.opacityRate = data.opacityRate;
        }
        if (data.sizeRate !== void 0) {
          this.sizeRate = data.sizeRate;
        }
        if (data.velocityRate !== void 0) {
          this.velocityRate = data.velocityRate;
        }
      }
    };
    exports.ZIndex = ZIndex;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Orbit/OrbitRotation.js
var require_OrbitRotation = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Orbit/OrbitRotation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OrbitRotation = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var OrbitRotation = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.value = 45;
        this.random.enable = false;
        this.random.minimumValue = 0;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        super.load(data);
      }
    };
    exports.OrbitRotation = OrbitRotation;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Orbit/Orbit.js
var require_Orbit = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Orbit/Orbit.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Orbit = void 0;
    var OrbitRotation_1 = require_OrbitRotation();
    var OptionsColor_1 = require_OptionsColor();
    var AnimationOptions_1 = require_AnimationOptions();
    var Orbit = class {
      constructor() {
        this.animation = new AnimationOptions_1.AnimationOptions();
        this.enable = false;
        this.opacity = 1;
        this.rotation = new OrbitRotation_1.OrbitRotation();
        this.width = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.animation.load(data.animation);
        this.rotation.load(data.rotation);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
        if (data.width !== void 0) {
          this.width = data.width;
        }
        if (data.radius !== void 0) {
          this.radius = data.radius;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
      }
    };
    exports.Orbit = Orbit;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/Repulse/Repulse.js
var require_Repulse = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/Repulse/Repulse.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Repulse = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var Repulse = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.enabled = false;
        this.distance = 1;
        this.duration = 1;
        this.factor = 1;
        this.speed = 1;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        if (data.enabled !== void 0) {
          this.enabled = data.enabled;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        if (data.duration !== void 0) {
          this.duration = data.duration;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
      }
    };
    exports.Repulse = Repulse;
  }
});

// node_modules/tsparticles/Options/Classes/AnimatableGradient.js
var require_AnimatableGradient = __commonJS({
  "node_modules/tsparticles/Options/Classes/AnimatableGradient.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GradientColorOpacityAnimation = exports.GradientAngleAnimation = exports.AnimatableGradientColor = exports.GradientColorOpacity = exports.GradientAngle = exports.AnimatableGradient = void 0;
    var Enums_1 = require_Enums();
    var AnimatableColor_1 = require_AnimatableColor();
    var Utils_1 = require_Utils2();
    var AnimatableGradient = class {
      constructor() {
        this.angle = new GradientAngle();
        this.colors = [];
        this.type = Enums_1.GradientType.random;
      }
      load(data) {
        if (!data) {
          return;
        }
        this.angle.load(data.angle);
        if (data.colors !== void 0) {
          this.colors = data.colors.map((s) => {
            const tmp = new AnimatableGradientColor();
            tmp.load(s);
            return tmp;
          });
        }
        if (data.type !== void 0) {
          this.type = data.type;
        }
      }
    };
    exports.AnimatableGradient = AnimatableGradient;
    var GradientAngle = class {
      constructor() {
        this.value = 0;
        this.animation = new GradientAngleAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
      }
      load(data) {
        if (!data) {
          return;
        }
        this.animation.load(data.animation);
        if (data.value !== void 0) {
          this.value = data.value;
        }
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
      }
    };
    exports.GradientAngle = GradientAngle;
    var GradientColorOpacity = class {
      constructor() {
        this.value = 0;
        this.animation = new GradientColorOpacityAnimation();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.animation.load(data.animation);
        if (data.value !== void 0) {
          this.value = (0, Utils_1.setRangeValue)(data.value);
        }
      }
    };
    exports.GradientColorOpacity = GradientColorOpacity;
    var AnimatableGradientColor = class {
      constructor() {
        this.stop = 0;
        this.value = new AnimatableColor_1.AnimatableColor();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.stop !== void 0) {
          this.stop = data.stop;
        }
        this.value = AnimatableColor_1.AnimatableColor.create(this.value, data.value);
        if (data.opacity !== void 0) {
          this.opacity = new GradientColorOpacity();
          if (typeof data.opacity === "number") {
            this.opacity.value = data.opacity;
          } else {
            this.opacity.load(data.opacity);
          }
        }
      }
    };
    exports.AnimatableGradientColor = AnimatableGradientColor;
    var GradientAngleAnimation = class {
      constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 0;
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports.GradientAngleAnimation = GradientAngleAnimation;
    var GradientColorOpacityAnimation = class {
      constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 0;
        this.sync = false;
        this.startValue = Enums_1.StartValueType.random;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
        if (data.startValue !== void 0) {
          this.startValue = data.startValue;
        }
      }
    };
    exports.GradientColorOpacityAnimation = GradientColorOpacityAnimation;
  }
});

// node_modules/tsparticles/Options/Classes/Particles/ParticlesOptions.js
var require_ParticlesOptions = __commonJS({
  "node_modules/tsparticles/Options/Classes/Particles/ParticlesOptions.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParticlesOptions = void 0;
    var Links_1 = require_Links();
    var Move_1 = require_Move();
    var ParticlesNumber_1 = require_ParticlesNumber();
    var Opacity_1 = require_Opacity();
    var Shape_1 = require_Shape();
    var Size_1 = require_Size();
    var Rotate_1 = require_Rotate();
    var Shadow_1 = require_Shadow();
    var Stroke_1 = require_Stroke();
    var Collisions_1 = require_Collisions();
    var Twinkle_1 = require_Twinkle();
    var AnimatableColor_1 = require_AnimatableColor();
    var Life_1 = require_Life();
    var Bounce_1 = require_Bounce();
    var Destroy_1 = require_Destroy();
    var Wobble_1 = require_Wobble();
    var Tilt_1 = require_Tilt();
    var Roll_1 = require_Roll();
    var ZIndex_1 = require_ZIndex();
    var Utils_1 = require_Utils2();
    var Orbit_1 = require_Orbit();
    var Repulse_1 = require_Repulse();
    var AnimatableGradient_1 = require_AnimatableGradient();
    var ParticlesOptions = class {
      constructor() {
        this.bounce = new Bounce_1.Bounce();
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.destroy = new Destroy_1.Destroy();
        this.gradient = [];
        this.groups = {};
        this.life = new Life_1.Life();
        this.links = new Links_1.Links();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.orbit = new Orbit_1.Orbit();
        this.reduceDuplicates = false;
        this.repulse = new Repulse_1.Repulse();
        this.roll = new Roll_1.Roll();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.tilt = new Tilt_1.Tilt();
        this.twinkle = new Twinkle_1.Twinkle();
        this.wobble = new Wobble_1.Wobble();
        this.zIndex = new ZIndex_1.ZIndex();
      }
      get line_linked() {
        return this.links;
      }
      set line_linked(value) {
        this.links = value;
      }
      get lineLinked() {
        return this.links;
      }
      set lineLinked(value) {
        this.links = value;
      }
      load(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (data === void 0) {
          return;
        }
        this.bounce.load(data.bounce);
        this.color.load(AnimatableColor_1.AnimatableColor.create(this.color, data.color));
        this.destroy.load(data.destroy);
        this.life.load(data.life);
        const links2 = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
        if (links2 !== void 0) {
          this.links.load(links2);
        }
        if (data.groups !== void 0) {
          for (const group in data.groups) {
            const item = data.groups[group];
            if (item !== void 0) {
              this.groups[group] = (0, Utils_1.deepExtend)((_c = this.groups[group]) !== null && _c !== void 0 ? _c : {}, item);
            }
          }
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.orbit.load(data.orbit);
        if (data.reduceDuplicates !== void 0) {
          this.reduceDuplicates = data.reduceDuplicates;
        }
        this.repulse.load(data.repulse);
        this.roll.load(data.roll);
        this.rotate.load(data.rotate);
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.tilt.load(data.tilt);
        this.twinkle.load(data.twinkle);
        this.wobble.load(data.wobble);
        this.zIndex.load(data.zIndex);
        const collisions = (_e = (_d = data.move) === null || _d === void 0 ? void 0 : _d.collisions) !== null && _e !== void 0 ? _e : (_f = data.move) === null || _f === void 0 ? void 0 : _f.bounce;
        if (collisions !== void 0) {
          this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        const strokeToLoad = (_g = data.stroke) !== null && _g !== void 0 ? _g : (_h = data.shape) === null || _h === void 0 ? void 0 : _h.stroke;
        if (strokeToLoad) {
          if (strokeToLoad instanceof Array) {
            this.stroke = strokeToLoad.map((s) => {
              const tmp = new Stroke_1.Stroke();
              tmp.load(s);
              return tmp;
            });
          } else {
            if (this.stroke instanceof Array) {
              this.stroke = new Stroke_1.Stroke();
            }
            this.stroke.load(strokeToLoad);
          }
        }
        const gradientToLoad = data.gradient;
        if (gradientToLoad) {
          if (gradientToLoad instanceof Array) {
            this.gradient = gradientToLoad.map((s) => {
              const tmp = new AnimatableGradient_1.AnimatableGradient();
              tmp.load(s);
              return tmp;
            });
          } else {
            if (this.gradient instanceof Array) {
              this.gradient = new AnimatableGradient_1.AnimatableGradient();
            }
            this.gradient.load(gradientToLoad);
          }
        }
      }
    };
    exports.ParticlesOptions = ParticlesOptions;
  }
});

// node_modules/tsparticles/Core/Particle/Vector3d.js
var require_Vector3d = __commonJS({
  "node_modules/tsparticles/Core/Particle/Vector3d.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector3d = void 0;
    var Vector_1 = require_Vector();
    var Vector3d = class extends Vector_1.Vector {
      constructor(x, y, z) {
        super(x, y);
        this.z = z === void 0 ? x.z : z;
      }
      static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
      }
      static create(x, y, z) {
        return new Vector3d(x, y, z);
      }
      add(v) {
        return v instanceof Vector3d ? Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z) : super.add(v);
      }
      addTo(v) {
        super.addTo(v);
        if (v instanceof Vector3d) {
          this.z += v.z;
        }
      }
      sub(v) {
        return v instanceof Vector3d ? Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z) : super.sub(v);
      }
      subFrom(v) {
        super.subFrom(v);
        if (v instanceof Vector3d) {
          this.z -= v.z;
        }
      }
      mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
      }
      multTo(n) {
        super.multTo(n);
        this.z *= n;
      }
      div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
      }
      divTo(n) {
        super.divTo(n);
        this.z /= n;
      }
      copy() {
        return Vector3d.clone(this);
      }
      setTo(v) {
        super.setTo(v);
        if (v instanceof Vector3d) {
          this.z = v.z;
        }
      }
    };
    exports.Vector3d = Vector3d;
  }
});

// node_modules/tsparticles/Core/Particle.js
var require_Particle = __commonJS({
  "node_modules/tsparticles/Core/Particle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Particle = void 0;
    var ParticlesOptions_1 = require_ParticlesOptions();
    var Shape_1 = require_Shape();
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    var Vector_1 = require_Vector();
    var Vector3d_1 = require_Vector3d();
    var fixOutMode = (data) => {
      if ((0, Utils_1.isInArray)(data.outMode, data.checkModes) || (0, Utils_1.isInArray)(data.outMode, data.checkModes)) {
        if (data.coord > data.maxCoord - data.radius * 2) {
          data.setCb(-data.radius);
        } else if (data.coord < data.radius * 2) {
          data.setCb(data.radius);
        }
      }
    };
    var Particle = class {
      constructor(id, container, position, overrideOptions, group) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.id = id;
        this.container = container;
        this.group = group;
        this.fill = true;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.splitCount = 0;
        this.misplaced = false;
        this.retina = {
          maxDistance: {}
        };
        const pxRatio = container.retina.pixelRatio;
        const mainOptions = container.actualOptions;
        const particlesOptions = new ParticlesOptions_1.ParticlesOptions();
        particlesOptions.load(mainOptions.particles);
        const shapeType = particlesOptions.shape.type;
        const reduceDuplicates = particlesOptions.reduceDuplicates;
        this.shape = shapeType instanceof Array ? (0, Utils_1.itemFromArray)(shapeType, this.id, reduceDuplicates) : shapeType;
        if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
          if (overrideOptions.shape.type) {
            const overrideShapeType = overrideOptions.shape.type;
            this.shape = overrideShapeType instanceof Array ? (0, Utils_1.itemFromArray)(overrideShapeType, this.id, reduceDuplicates) : overrideShapeType;
          }
          const shapeOptions = new Shape_1.Shape();
          shapeOptions.load(overrideOptions.shape);
          if (this.shape) {
            this.shapeData = this.loadShapeData(shapeOptions, reduceDuplicates);
          }
        } else {
          this.shapeData = this.loadShapeData(particlesOptions.shape, reduceDuplicates);
        }
        if (overrideOptions !== void 0) {
          particlesOptions.load(overrideOptions);
        }
        if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== void 0) {
          particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
        }
        this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
        this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
        this.options = particlesOptions;
        this.pathDelay = (0, Utils_1.getValue)(this.options.move.path.delay) * 1e3;
        const zIndexValue = (0, Utils_1.getRangeValue)(this.options.zIndex.value);
        container.retina.initParticle(this);
        const sizeOptions = this.options.size, sizeRange = sizeOptions.value;
        this.size = {
          enable: sizeOptions.animation.enable,
          value: (0, Utils_1.getValue)(sizeOptions) * container.retina.pixelRatio,
          max: (0, Utils_1.getRangeMax)(sizeRange) * pxRatio,
          min: (0, Utils_1.getRangeMin)(sizeRange) * pxRatio,
          loops: 0,
          maxLoops: sizeOptions.animation.count
        };
        const sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
          this.size.status = Enums_1.AnimationStatus.increasing;
          switch (sizeAnimation.startValue) {
            case Enums_1.StartValueType.min:
              this.size.value = this.size.min;
              this.size.status = Enums_1.AnimationStatus.increasing;
              break;
            case Enums_1.StartValueType.random:
              this.size.value = (0, Utils_1.randomInRange)(this.size) * pxRatio;
              this.size.status = Math.random() >= 0.5 ? Enums_1.AnimationStatus.increasing : Enums_1.AnimationStatus.decreasing;
              break;
            case Enums_1.StartValueType.max:
            default:
              this.size.value = this.size.max;
              this.size.status = Enums_1.AnimationStatus.decreasing;
              break;
          }
          this.size.velocity = ((_g = this.retina.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;
          if (!sizeAnimation.sync) {
            this.size.velocity *= Math.random();
          }
        }
        this.direction = (0, Utils_1.getParticleDirectionAngle)(this.options.move.direction);
        this.bubble = {
          inRange: false
        };
        this.initialVelocity = this.calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - (0, Utils_1.getRangeValue)(this.options.move.decay);
        this.position = this.calcPosition(container, position, (0, Utils_1.clamp)(zIndexValue, 0, container.zLayers));
        this.initialPosition = this.position.copy();
        this.offset = Vector_1.Vector.origin;
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
          drawer = Utils_1.Plugins.getShapeDrawer(this.shape);
          if (drawer) {
            container.drawers.set(this.shape, drawer);
          }
        }
        if (drawer === null || drawer === void 0 ? void 0 : drawer.loadShape) {
          drawer === null || drawer === void 0 ? void 0 : drawer.loadShape(this);
        }
        const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
        if (sideCountFunc) {
          this.sides = sideCountFunc(this);
        }
        this.life = this.loadLife();
        this.spawning = this.life.delay > 0;
        if (this.options.move.spin.enable) {
          const spinPos = (_h = this.options.move.spin.position) !== null && _h !== void 0 ? _h : { x: 50, y: 50 };
          const spinCenter = {
            x: spinPos.x / 100 * container.canvas.size.width,
            y: spinPos.y / 100 * container.canvas.size.height
          };
          const pos = this.getPosition();
          const distance = (0, Utils_1.getDistance)(pos, spinCenter);
          this.spin = {
            center: spinCenter,
            direction: this.velocity.x >= 0 ? Enums_1.RotateDirection.clockwise : Enums_1.RotateDirection.counterClockwise,
            angle: this.velocity.angle,
            radius: distance,
            acceleration: (_j = this.retina.spinAcceleration) !== null && _j !== void 0 ? _j : (0, Utils_1.getRangeValue)(this.options.move.spin.acceleration)
          };
        }
        this.shadowColor = (0, Utils_1.colorToRgb)(this.options.shadow.color);
        for (const updater of container.particles.updaters) {
          if (updater.init) {
            updater.init(this);
          }
        }
        if (drawer && drawer.particleInit) {
          drawer.particleInit(container, this);
        }
        for (const [, plugin] of container.plugins) {
          if (plugin.particleCreated) {
            plugin.particleCreated(this);
          }
        }
      }
      isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
      }
      isInsideCanvas() {
        const radius = this.getRadius();
        const canvasSize = this.container.canvas.size;
        return this.position.x >= -radius && this.position.y >= -radius && this.position.y <= canvasSize.height + radius && this.position.x <= canvasSize.width + radius;
      }
      draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins) {
          container.canvas.drawParticlePlugin(plugin, this, delta);
        }
        container.canvas.drawParticle(this, delta);
      }
      getPosition() {
        return {
          x: this.position.x + this.offset.x,
          y: this.position.y + this.offset.y,
          z: this.position.z
        };
      }
      getRadius() {
        var _a;
        return (_a = this.bubble.radius) !== null && _a !== void 0 ? _a : this.size.value;
      }
      getMass() {
        return this.getRadius() ** 2 * Math.PI / 2;
      }
      getFillColor() {
        var _a, _b, _c;
        const color = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : (0, Utils_1.getHslFromAnimation)(this.color);
        if (color && this.roll && (this.backColor || this.roll.alter)) {
          const rolled = Math.floor(((_c = (_b = this.roll) === null || _b === void 0 ? void 0 : _b.angle) !== null && _c !== void 0 ? _c : 0) / (Math.PI / 2)) % 2;
          if (rolled) {
            if (this.backColor) {
              return this.backColor;
            }
            if (this.roll.alter) {
              return (0, Utils_1.alterHsl)(color, this.roll.alter.type, this.roll.alter.value);
            }
          }
        }
        return color;
      }
      getStrokeColor() {
        var _a, _b;
        return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : (0, Utils_1.getHslFromAnimation)(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
      }
      destroy(override) {
        this.destroyed = true;
        this.bubble.inRange = false;
        if (this.unbreakable) {
          return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        for (const [, plugin] of this.container.plugins) {
          if (plugin.particleDestroyed) {
            plugin.particleDestroyed(this, override);
          }
        }
        if (override) {
          return;
        }
        const destroyOptions = this.options.destroy;
        if (destroyOptions.mode === Enums_1.DestroyMode.split) {
          this.split();
        }
      }
      reset() {
        if (this.opacity) {
          this.opacity.loops = 0;
        }
        this.size.loops = 0;
      }
      split() {
        const splitOptions = this.options.destroy.split;
        if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
          return;
        }
        const rate = (0, Utils_1.getRangeValue)(splitOptions.rate.value);
        for (let i = 0; i < rate; i++) {
          this.container.particles.addSplitParticle(this);
        }
      }
      calcPosition(container, position, zIndex, tryCount = 0) {
        var _a, _b, _c, _d, _e, _f;
        for (const [, plugin] of container.plugins) {
          const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position, this) : void 0;
          if (pluginPos !== void 0) {
            return Vector3d_1.Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
          }
        }
        const canvasSize = container.canvas.size;
        const pos = Vector3d_1.Vector3d.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height, zIndex);
        const radius = this.getRadius();
        const outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
          fixOutMode({
            outMode,
            checkModes: [Enums_1.OutMode.bounce, Enums_1.OutMode.bounceHorizontal],
            coord: pos.x,
            maxCoord: container.canvas.size.width,
            setCb: (value) => pos.x += value,
            radius
          });
        }, fixVertical = (outMode) => {
          fixOutMode({
            outMode,
            checkModes: [Enums_1.OutMode.bounce, Enums_1.OutMode.bounceVertical],
            coord: pos.y,
            maxCoord: container.canvas.size.height,
            setCb: (value) => pos.y += value,
            radius
          });
        };
        fixHorizontal((_c = outModes.left) !== null && _c !== void 0 ? _c : outModes.default);
        fixHorizontal((_d = outModes.right) !== null && _d !== void 0 ? _d : outModes.default);
        fixVertical((_e = outModes.top) !== null && _e !== void 0 ? _e : outModes.default);
        fixVertical((_f = outModes.bottom) !== null && _f !== void 0 ? _f : outModes.default);
        if (this.checkOverlap(pos, tryCount)) {
          return this.calcPosition(container, void 0, zIndex, tryCount + 1);
        }
        return pos;
      }
      checkOverlap(pos, tryCount = 0) {
        const collisionsOptions = this.options.collisions;
        const radius = this.getRadius();
        if (!collisionsOptions.enable) {
          return false;
        }
        const overlapOptions = collisionsOptions.overlap;
        if (overlapOptions.enable) {
          return false;
        }
        const retries = overlapOptions.retries;
        if (retries >= 0 && tryCount > retries) {
          throw new Error("Particle is overlapping and can't be placed");
        }
        let overlaps = false;
        for (const particle of this.container.particles.array) {
          if ((0, Utils_1.getDistance)(pos, particle.position) < radius + particle.getRadius()) {
            overlaps = true;
            break;
          }
        }
        return overlaps;
      }
      calculateVelocity() {
        const baseVelocity = (0, Utils_1.getParticleBaseVelocity)(this.direction);
        const res = baseVelocity.copy();
        const moveOptions = this.options.move;
        const rad = Math.PI / 180 * moveOptions.angle.value;
        const radOffset = Math.PI / 180 * moveOptions.angle.offset;
        const range = {
          left: radOffset - rad / 2,
          right: radOffset + rad / 2
        };
        if (!moveOptions.straight) {
          res.angle += (0, Utils_1.randomInRange)((0, Utils_1.setRangeValue)(range.left, range.right));
        }
        if (moveOptions.random && typeof moveOptions.speed === "number") {
          res.length *= Math.random();
        }
        return res;
      }
      loadShapeData(shapeOptions, reduceDuplicates) {
        const shapeData = shapeOptions.options[this.shape];
        if (shapeData) {
          return (0, Utils_1.deepExtend)({}, shapeData instanceof Array ? (0, Utils_1.itemFromArray)(shapeData, this.id, reduceDuplicates) : shapeData);
        }
      }
      loadLife() {
        const container = this.container;
        const particlesOptions = this.options;
        const lifeOptions = particlesOptions.life;
        const life = {
          delay: container.retina.reduceFactor ? (0, Utils_1.getRangeValue)(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1e3 : 0,
          delayTime: 0,
          duration: container.retina.reduceFactor ? (0, Utils_1.getRangeValue)(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1e3 : 0,
          time: 0,
          count: particlesOptions.life.count
        };
        if (life.duration <= 0) {
          life.duration = -1;
        }
        if (life.count <= 0) {
          life.count = -1;
        }
        return life;
      }
    };
    exports.Particle = Particle;
  }
});

// node_modules/tsparticles/Core/InteractionManager.js
var require_InteractionManager = __commonJS({
  "node_modules/tsparticles/Core/InteractionManager.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractionManager = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var InteractionManager = class {
      constructor(container) {
        this.container = container;
        const interactors = Utils_1.Plugins.getInteractors(container);
        this.externalInteractors = [];
        this.particleInteractors = [];
        for (const interactor of interactors) {
          switch (interactor.type) {
            case Enums_1.InteractorType.External:
              this.externalInteractors.push(interactor);
              break;
            case Enums_1.InteractorType.Particles:
              this.particleInteractors.push(interactor);
              break;
          }
        }
      }
      externalInteract(delta) {
        for (const interactor of this.externalInteractors) {
          if (interactor.isEnabled()) {
            interactor.interact(delta);
          }
        }
      }
      particlesInteract(particle, delta) {
        for (const interactor of this.externalInteractors) {
          interactor.reset(particle);
        }
        for (const interactor of this.particleInteractors) {
          if (interactor.isEnabled(particle)) {
            interactor.interact(particle, delta);
          }
        }
      }
    };
    exports.InteractionManager = InteractionManager;
  }
});

// node_modules/tsparticles/Core/Particle/Mover.js
var require_Mover = __commonJS({
  "node_modules/tsparticles/Core/Particle/Mover.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mover = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    function applyDistance(particle) {
      const initialPosition = particle.initialPosition;
      const { dx, dy } = (0, Utils_1.getDistances)(initialPosition, particle.position);
      const dxFixed = Math.abs(dx), dyFixed = Math.abs(dy);
      const hDistance = particle.retina.maxDistance.horizontal;
      const vDistance = particle.retina.maxDistance.vertical;
      if (!hDistance && !vDistance) {
        return;
      }
      if ((hDistance && dxFixed >= hDistance || vDistance && dyFixed >= vDistance) && !particle.misplaced) {
        particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
        if (hDistance) {
          particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        }
        if (vDistance) {
          particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        }
      } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
      } else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && (pos.x < initialPosition.x && vel.x < 0 || pos.x > initialPosition.x && vel.x > 0)) {
          vel.x *= -Math.random();
        }
        if (vDistance && (pos.y < initialPosition.y && vel.y < 0 || pos.y > initialPosition.y && vel.y > 0)) {
          vel.y *= -Math.random();
        }
      }
    }
    var Mover = class {
      constructor(container) {
        this.container = container;
      }
      move(particle, delta) {
        if (particle.destroyed) {
          return;
        }
        this.moveParticle(particle, delta);
        this.moveParallax(particle);
      }
      moveParticle(particle, delta) {
        var _a, _b, _c;
        var _d, _e;
        const particleOptions = particle.options;
        const moveOptions = particleOptions.move;
        if (!moveOptions.enable) {
          return;
        }
        const container = this.container, slowFactor = this.getProximitySpeedFactor(particle), baseSpeed = ((_a = (_d = particle.retina).moveSpeed) !== null && _a !== void 0 ? _a : _d.moveSpeed = (0, Utils_1.getRangeValue)(moveOptions.speed) * container.retina.pixelRatio) * container.retina.reduceFactor, moveDrift = (_b = (_e = particle.retina).moveDrift) !== null && _b !== void 0 ? _b : _e.moveDrift = (0, Utils_1.getRangeValue)(particle.options.move.drift) * container.retina.pixelRatio, maxSize = (0, Utils_1.getRangeMax)(particleOptions.size.value) * container.retina.pixelRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, diffFactor = 2, speedFactor = sizeFactor * slowFactor * (delta.factor || 1) / diffFactor, moveSpeed = baseSpeed * speedFactor;
        this.applyPath(particle, delta);
        const gravityOptions = moveOptions.gravity;
        const gravityFactor = gravityOptions.enable && gravityOptions.inverse ? -1 : 1;
        if (gravityOptions.enable && moveSpeed) {
          particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
        }
        if (moveDrift && moveSpeed) {
          particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
        }
        const decay = particle.moveDecay;
        if (decay != 1) {
          particle.velocity.multTo(decay);
        }
        const velocity = particle.velocity.mult(moveSpeed);
        const maxSpeed = (_c = particle.retina.maxSpeed) !== null && _c !== void 0 ? _c : container.retina.maxSpeed;
        if (gravityOptions.enable && gravityOptions.maxSpeed > 0 && (!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) {
          velocity.y = gravityFactor * maxSpeed;
          if (moveSpeed) {
            particle.velocity.y = velocity.y / moveSpeed;
          }
        }
        const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
        if (moveOptions.spin.enable) {
          this.spin(particle, moveSpeed);
        } else {
          if (zVelocityFactor != 1) {
            velocity.multTo(zVelocityFactor);
          }
          particle.position.addTo(velocity);
          if (moveOptions.vibrate) {
            particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
            particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
          }
        }
        applyDistance(particle);
      }
      spin(particle, moveSpeed) {
        const container = this.container;
        if (!particle.spin) {
          return;
        }
        const updateFunc = {
          x: particle.spin.direction === Enums_1.RotateDirection.clockwise ? Math.cos : Math.sin,
          y: particle.spin.direction === Enums_1.RotateDirection.clockwise ? Math.sin : Math.cos
        };
        particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
        particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
        particle.spin.radius += particle.spin.acceleration;
        const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
        if (particle.spin.radius > maxCanvasSize / 2) {
          particle.spin.radius = maxCanvasSize / 2;
          particle.spin.acceleration *= -1;
        } else if (particle.spin.radius < 0) {
          particle.spin.radius = 0;
          particle.spin.acceleration *= -1;
        }
        particle.spin.angle += moveSpeed / 100 * (1 - particle.spin.radius / maxCanvasSize);
      }
      applyPath(particle, delta) {
        const particlesOptions = particle.options;
        const pathOptions = particlesOptions.move.path;
        const pathEnabled = pathOptions.enable;
        if (!pathEnabled) {
          return;
        }
        const container = this.container;
        if (particle.lastPathTime <= particle.pathDelay) {
          particle.lastPathTime += delta.value;
          return;
        }
        const path = container.pathGenerator.generate(particle);
        particle.velocity.addTo(path);
        if (pathOptions.clamp) {
          particle.velocity.x = (0, Utils_1.clamp)(particle.velocity.x, -1, 1);
          particle.velocity.y = (0, Utils_1.clamp)(particle.velocity.y, -1, 1);
        }
        particle.lastPathTime -= particle.pathDelay;
      }
      moveParallax(particle) {
        const container = this.container;
        const options = container.actualOptions;
        if ((0, Utils_1.isSsr)() || !options.interactivity.events.onHover.parallax.enable) {
          return;
        }
        const parallaxForce = options.interactivity.events.onHover.parallax.force;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
          return;
        }
        const canvasCenter = {
          x: container.canvas.size.width / 2,
          y: container.canvas.size.height / 2
        };
        const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        const factor = particle.getRadius() / parallaxForce;
        const tmp = {
          x: (mousePos.x - canvasCenter.x) * factor,
          y: (mousePos.y - canvasCenter.y) * factor
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
      }
      getProximitySpeedFactor(particle) {
        const container = this.container;
        const options = container.actualOptions;
        const active = (0, Utils_1.isInArray)(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
          return 1;
        }
        const mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
          return 1;
        }
        const particlePos = particle.getPosition();
        const dist = (0, Utils_1.getDistance)(mousePos, particlePos);
        const radius = container.retina.slowModeRadius;
        if (dist > radius) {
          return 1;
        }
        const proximityFactor = dist / radius || 0;
        const slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
      }
    };
    exports.Mover = Mover;
  }
});

// node_modules/tsparticles/Core/Particles.js
var require_Particles = __commonJS({
  "node_modules/tsparticles/Core/Particles.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Particles = void 0;
    var Particle_1 = require_Particle();
    var Utils_1 = require_Utils2();
    var InteractionManager_1 = require_InteractionManager();
    var ParticlesOptions_1 = require_ParticlesOptions();
    var Mover_1 = require_Mover();
    var Particles2 = class {
      constructor(container) {
        this.container = container;
        this.nextId = 0;
        this.array = [];
        this.zArray = [];
        this.mover = new Mover_1.Mover(container);
        this.limit = 0;
        this.needsSort = false;
        this.lastZIndex = 0;
        this.freqs = {
          links: /* @__PURE__ */ new Map(),
          triangles: /* @__PURE__ */ new Map()
        };
        this.interactionManager = new InteractionManager_1.InteractionManager(container);
        const canvasSize = this.container.canvas.size;
        this.linksColors = /* @__PURE__ */ new Map();
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
        this.updaters = Utils_1.Plugins.getUpdaters(container);
      }
      get count() {
        return this.array.length;
      }
      init() {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        this.lastZIndex = 0;
        this.needsSort = false;
        this.freqs.links = /* @__PURE__ */ new Map();
        this.freqs.triangles = /* @__PURE__ */ new Map();
        let handled = false;
        for (const [, plugin] of container.plugins) {
          if (plugin.particlesInitialization !== void 0) {
            handled = plugin.particlesInitialization();
          }
          if (handled) {
            break;
          }
        }
        this.addManualParticles();
        if (!handled) {
          for (const group in options.particles.groups) {
            const groupOptions = options.particles.groups[group];
            for (let i = this.count, j = 0; j < ((_a = groupOptions.number) === null || _a === void 0 ? void 0 : _a.value) && i < options.particles.number.value; i++, j++) {
              this.addParticle(void 0, groupOptions, group);
            }
          }
          for (let i = this.count; i < options.particles.number.value; i++) {
            this.addParticle();
          }
        }
        container.pathGenerator.init(container);
      }
      redraw() {
        this.clear();
        this.init();
        this.draw({ value: 0, factor: 0 });
      }
      removeAt(index, quantity = 1, group, override) {
        if (!(index >= 0 && index <= this.count)) {
          return;
        }
        let deleted = 0;
        for (let i = index; deleted < quantity && i < this.count; i++) {
          const particle = this.array[i];
          if (!particle || particle.group !== group) {
            continue;
          }
          particle.destroy(override);
          this.array.splice(i--, 1);
          const zIdx = this.zArray.indexOf(particle);
          this.zArray.splice(zIdx, 1);
          deleted++;
        }
      }
      remove(particle, group, override) {
        this.removeAt(this.array.indexOf(particle), void 0, group, override);
      }
      update(delta) {
        const container = this.container;
        const particlesToDelete = [];
        container.pathGenerator.update();
        for (const [, plugin] of container.plugins) {
          if (plugin.update !== void 0) {
            plugin.update(delta);
          }
        }
        for (const particle of this.array) {
          const resizeFactor = container.canvas.resizeFactor;
          if (resizeFactor) {
            particle.position.x *= resizeFactor.width;
            particle.position.y *= resizeFactor.height;
          }
          particle.bubble.inRange = false;
          for (const [, plugin] of this.container.plugins) {
            if (particle.destroyed) {
              break;
            }
            if (plugin.particleUpdate) {
              plugin.particleUpdate(particle, delta);
            }
          }
          this.mover.move(particle, delta);
          if (particle.destroyed) {
            particlesToDelete.push(particle);
            continue;
          }
          this.quadTree.insert(new Utils_1.Point(particle.getPosition(), particle));
        }
        for (const particle of particlesToDelete) {
          this.remove(particle);
        }
        this.interactionManager.externalInteract(delta);
        for (const particle of container.particles.array) {
          for (const updater of this.updaters) {
            updater.update(particle, delta);
          }
          if (!particle.destroyed && !particle.spawning) {
            this.interactionManager.particlesInteract(particle, delta);
          }
        }
        delete container.canvas.resizeFactor;
      }
      draw(delta) {
        const container = this.container;
        container.canvas.clear();
        const canvasSize = this.container.canvas.size;
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
        this.update(delta);
        if (this.needsSort) {
          this.zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
          this.lastZIndex = this.zArray[this.zArray.length - 1].position.z;
          this.needsSort = false;
        }
        for (const [, plugin] of container.plugins) {
          container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this.zArray) {
          p.draw(delta);
        }
      }
      clear() {
        this.array = [];
        this.zArray = [];
      }
      push(nb, mouse, overrideOptions, group) {
        this.pushing = true;
        for (let i = 0; i < nb; i++) {
          this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions, group);
        }
        this.pushing = false;
      }
      addParticle(position, overrideOptions, group) {
        const container = this.container;
        const options = container.actualOptions;
        const limit = options.particles.number.limit * container.density;
        if (limit > 0) {
          const countToRemove = this.count + 1 - limit;
          if (countToRemove > 0) {
            this.removeQuantity(countToRemove);
          }
        }
        return this.pushParticle(position, overrideOptions, group);
      }
      addSplitParticle(parent) {
        const splitOptions = parent.options.destroy.split;
        const options = new ParticlesOptions_1.ParticlesOptions();
        options.load(parent.options);
        const factor = (0, Utils_1.getRangeValue)(splitOptions.factor.value);
        options.color.load({
          value: {
            hsl: parent.getFillColor()
          }
        });
        if (typeof options.size.value === "number") {
          options.size.value /= factor;
        } else {
          options.size.value.min /= factor;
          options.size.value.max /= factor;
        }
        options.load(splitOptions.particles);
        const offset = splitOptions.sizeOffset ? (0, Utils_1.setRangeValue)(-parent.size.value, parent.size.value) : 0;
        const position = {
          x: parent.position.x + (0, Utils_1.randomInRange)(offset),
          y: parent.position.y + (0, Utils_1.randomInRange)(offset)
        };
        return this.pushParticle(position, options, parent.group, (particle) => {
          if (particle.size.value < 0.5) {
            return false;
          }
          particle.velocity.length = (0, Utils_1.randomInRange)((0, Utils_1.setRangeValue)(parent.velocity.length, particle.velocity.length));
          particle.splitCount = parent.splitCount + 1;
          particle.unbreakable = true;
          setTimeout(() => {
            particle.unbreakable = false;
          }, 500);
          return true;
        });
      }
      removeQuantity(quantity, group) {
        this.removeAt(0, quantity, group);
      }
      getLinkFrequency(p1, p2) {
        const key = `${Math.min(p1.id, p2.id)}_${Math.max(p1.id, p2.id)}`;
        let res = this.freqs.links.get(key);
        if (res === void 0) {
          res = Math.random();
          this.freqs.links.set(key, res);
        }
        return res;
      }
      getTriangleFrequency(p1, p2, p3) {
        let [id1, id2, id3] = [p1.id, p2.id, p3.id];
        if (id1 > id2) {
          [id2, id1] = [id1, id2];
        }
        if (id2 > id3) {
          [id3, id2] = [id2, id3];
        }
        if (id1 > id3) {
          [id3, id1] = [id1, id3];
        }
        const key = `${id1}_${id2}_${id3}`;
        let res = this.freqs.triangles.get(key);
        if (res === void 0) {
          res = Math.random();
          this.freqs.triangles.set(key, res);
        }
        return res;
      }
      addManualParticles() {
        const container = this.container;
        const options = container.actualOptions;
        for (const particle of options.manualParticles) {
          const pos = particle.position ? {
            x: particle.position.x * container.canvas.size.width / 100,
            y: particle.position.y * container.canvas.size.height / 100
          } : void 0;
          this.addParticle(pos, particle.options);
        }
      }
      setDensity() {
        const options = this.container.actualOptions;
        for (const group in options.particles.groups) {
          this.applyDensity(options.particles.groups[group], 0, group);
        }
        this.applyDensity(options.particles, options.manualParticles.length);
      }
      applyDensity(options, manualCount, group) {
        var _a;
        if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
          return;
        }
        const numberOptions = options.number;
        const densityFactor = this.initDensityFactor(numberOptions.density);
        const optParticlesNumber = numberOptions.value;
        const optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        const particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount;
        const particlesCount = Math.min(this.count, this.array.filter((t) => t.group === group).length);
        this.limit = numberOptions.limit * densityFactor;
        if (particlesCount < particlesNumber) {
          this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
        } else if (particlesCount > particlesNumber) {
          this.removeQuantity(particlesCount - particlesNumber, group);
        }
      }
      initDensityFactor(densityOptions) {
        const container = this.container;
        if (!container.canvas.element || !densityOptions.enable) {
          return 1;
        }
        const canvas = container.canvas.element;
        const pxRatio = container.retina.pixelRatio;
        return canvas.width * canvas.height / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
      }
      pushParticle(position, overrideOptions, group, initializer) {
        try {
          const particle = new Particle_1.Particle(this.nextId, this.container, position, overrideOptions, group);
          let canAdd = true;
          if (initializer) {
            canAdd = initializer(particle);
          }
          if (!canAdd) {
            return;
          }
          this.array.push(particle);
          this.zArray.push(particle);
          this.nextId++;
          return particle;
        } catch (e) {
          console.warn(`error adding particle: ${e}`);
          return;
        }
      }
    };
    exports.Particles = Particles2;
  }
});

// node_modules/tsparticles/Core/Retina.js
var require_Retina = __commonJS({
  "node_modules/tsparticles/Core/Retina.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Retina = void 0;
    var Utils_1 = require_Utils2();
    var Retina = class {
      constructor(container) {
        this.container = container;
      }
      init() {
        const container = this.container;
        const options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || (0, Utils_1.isSsr)() ? 1 : window.devicePixelRatio;
        const motionOptions = this.container.actualOptions.motion;
        if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
          if ((0, Utils_1.isSsr)() || typeof matchMedia === "undefined" || !matchMedia) {
            this.reduceFactor = 1;
          } else {
            const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
            if (mediaQuery) {
              this.handleMotionChange(mediaQuery);
              const handleChange = () => {
                this.handleMotionChange(mediaQuery);
                container.refresh().catch(() => {
                });
              };
              if (mediaQuery.addEventListener !== void 0) {
                mediaQuery.addEventListener("change", handleChange);
              } else if (mediaQuery.addListener !== void 0) {
                mediaQuery.addListener(handleChange);
              }
            }
          }
        } else {
          this.reduceFactor = 1;
        }
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
          const element = container.canvas.element;
          container.canvas.size.width = element.offsetWidth * ratio;
          container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles;
        this.attractDistance = particles.move.attract.distance * ratio;
        this.linksDistance = particles.links.distance * ratio;
        this.linksWidth = particles.links.width * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        this.maxSpeed = particles.move.gravity.maxSpeed * ratio;
        if (particles.orbit.radius !== void 0) {
          this.orbitRadius = particles.orbit.radius * this.container.retina.pixelRatio;
        }
        const modes = options.interactivity.modes;
        this.connectModeDistance = modes.connect.distance * ratio;
        this.connectModeRadius = modes.connect.radius * ratio;
        this.grabModeDistance = modes.grab.distance * ratio;
        this.repulseModeDistance = modes.repulse.distance * ratio;
        this.bounceModeDistance = modes.bounce.distance * ratio;
        this.attractModeDistance = modes.attract.distance * ratio;
        this.slowModeRadius = modes.slow.radius * ratio;
        this.bubbleModeDistance = modes.bubble.distance * ratio;
        if (modes.bubble.size) {
          this.bubbleModeSize = modes.bubble.size * ratio;
        }
      }
      initParticle(particle) {
        const options = particle.options;
        const ratio = this.pixelRatio;
        const moveDistance = options.move.distance;
        const props = particle.retina;
        props.attractDistance = options.move.attract.distance * ratio;
        props.linksDistance = options.links.distance * ratio;
        props.linksWidth = options.links.width * ratio;
        props.moveDrift = (0, Utils_1.getRangeValue)(options.move.drift) * ratio;
        props.moveSpeed = (0, Utils_1.getRangeValue)(options.move.speed) * ratio;
        props.sizeAnimationSpeed = options.size.animation.speed * ratio;
        if (particle.spin) {
          props.spinAcceleration = (0, Utils_1.getRangeValue)(options.move.spin.acceleration) * ratio;
        }
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
        maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
        props.maxSpeed = options.move.gravity.maxSpeed * ratio;
      }
      handleMotionChange(mediaQuery) {
        const options = this.container.actualOptions;
        if (mediaQuery.matches) {
          const motion = options.motion;
          this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
        } else {
          this.reduceFactor = 1;
        }
      }
    };
    exports.Retina = Retina;
  }
});

// node_modules/tsparticles/Core/FrameManager.js
var require_FrameManager = __commonJS({
  "node_modules/tsparticles/Core/FrameManager.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrameManager = void 0;
    var FrameManager = class {
      constructor(container) {
        this.container = container;
      }
      nextFrame(timestamp) {
        var _a;
        try {
          const container = this.container;
          if (container.lastFrameTime !== void 0 && timestamp < container.lastFrameTime + 1e3 / container.fpsLimit) {
            container.draw(false);
            return;
          }
          (_a = container.lastFrameTime) !== null && _a !== void 0 ? _a : container.lastFrameTime = timestamp;
          const deltaValue = timestamp - container.lastFrameTime;
          const delta = {
            value: deltaValue,
            factor: 60 * deltaValue / 1e3
          };
          container.lifeTime += delta.value;
          container.lastFrameTime = timestamp;
          if (deltaValue > 1e3) {
            container.draw(false);
            return;
          }
          container.particles.draw(delta);
          if (container.duration > 0 && container.lifeTime > container.duration) {
            container.destroy();
            return;
          }
          if (container.getAnimationStatus()) {
            container.draw(false);
          }
        } catch (e) {
          console.error("tsParticles error in animation loop", e);
        }
      }
    };
    exports.FrameManager = FrameManager;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Events/ClickEvent.js
var require_ClickEvent = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Events/ClickEvent.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClickEvent = void 0;
    var ClickEvent = class {
      constructor() {
        this.enable = false;
        this.mode = [];
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
      }
    };
    exports.ClickEvent = ClickEvent;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Events/DivEvent.js
var require_DivEvent = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Events/DivEvent.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DivEvent = void 0;
    var Enums_1 = require_Enums();
    var DivEvent = class {
      constructor() {
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = Enums_1.DivType.circle;
      }
      get elementId() {
        return this.ids;
      }
      set elementId(value) {
        this.ids = value;
      }
      get el() {
        return this.elementId;
      }
      set el(value) {
        this.elementId = value;
      }
      get ids() {
        return this.selectors instanceof Array ? this.selectors.map((t) => t.replace("#", "")) : this.selectors.replace("#", "");
      }
      set ids(value) {
        this.selectors = value instanceof Array ? value.map((t) => `#${t}`) : `#${value}`;
      }
      load(data) {
        var _a, _b;
        if (data === void 0) {
          return;
        }
        const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
        if (ids !== void 0) {
          this.ids = ids;
        }
        if (data.selectors !== void 0) {
          this.selectors = data.selectors;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.type !== void 0) {
          this.type = data.type;
        }
      }
    };
    exports.DivEvent = DivEvent;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Events/Parallax.js
var require_Parallax = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Events/Parallax.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parallax = void 0;
    var Parallax = class {
      constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.force !== void 0) {
          this.force = data.force;
        }
        if (data.smooth !== void 0) {
          this.smooth = data.smooth;
        }
      }
    };
    exports.Parallax = Parallax;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Events/HoverEvent.js
var require_HoverEvent = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Events/HoverEvent.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HoverEvent = void 0;
    var Parallax_1 = require_Parallax();
    var HoverEvent = class {
      constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
      }
    };
    exports.HoverEvent = HoverEvent;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Events/Events.js
var require_Events = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Events/Events.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = void 0;
    var ClickEvent_1 = require_ClickEvent();
    var DivEvent_1 = require_DivEvent();
    var HoverEvent_1 = require_HoverEvent();
    var Events = class {
      constructor() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
      }
      get onclick() {
        return this.onClick;
      }
      set onclick(value) {
        this.onClick = value;
      }
      get ondiv() {
        return this.onDiv;
      }
      set ondiv(value) {
        this.onDiv = value;
      }
      get onhover() {
        return this.onHover;
      }
      set onhover(value) {
        this.onHover = value;
      }
      load(data) {
        var _a, _b, _c;
        if (data === void 0) {
          return;
        }
        this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
        const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
        if (onDiv !== void 0) {
          if (onDiv instanceof Array) {
            this.onDiv = onDiv.map((div) => {
              const tmp = new DivEvent_1.DivEvent();
              tmp.load(div);
              return tmp;
            });
          } else {
            this.onDiv = new DivEvent_1.DivEvent();
            this.onDiv.load(onDiv);
          }
        }
        this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
        if (data.resize !== void 0) {
          this.resize = data.resize;
        }
      }
    };
    exports.Events = Events;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/BubbleBase.js
var require_BubbleBase = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/BubbleBase.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BubbleBase = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var BubbleBase = class {
      constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.mix = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        if (data.duration !== void 0) {
          this.duration = data.duration;
        }
        if (data.mix !== void 0) {
          this.mix = data.mix;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
        if (data.color !== void 0) {
          if (data.color instanceof Array) {
            this.color = data.color.map((s) => OptionsColor_1.OptionsColor.create(void 0, s));
          } else {
            if (this.color instanceof Array) {
              this.color = new OptionsColor_1.OptionsColor();
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
          }
        }
        if (data.size !== void 0) {
          this.size = data.size;
        }
      }
    };
    exports.BubbleBase = BubbleBase;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/BubbleDiv.js
var require_BubbleDiv = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/BubbleDiv.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BubbleDiv = void 0;
    var BubbleBase_1 = require_BubbleBase();
    var BubbleDiv = class extends BubbleBase_1.BubbleBase {
      constructor() {
        super();
        this.selectors = [];
      }
      get ids() {
        return this.selectors instanceof Array ? this.selectors.map((t) => t.replace("#", "")) : this.selectors.replace("#", "");
      }
      set ids(value) {
        this.selectors = value instanceof Array ? value.map((t) => `#${t}`) : `#${value}`;
      }
      load(data) {
        super.load(data);
        if (data === void 0) {
          return;
        }
        if (data.ids !== void 0) {
          this.ids = data.ids;
        }
        if (data.selectors !== void 0) {
          this.selectors = data.selectors;
        }
      }
    };
    exports.BubbleDiv = BubbleDiv;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Bubble.js
var require_Bubble = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Bubble.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bubble = void 0;
    var BubbleDiv_1 = require_BubbleDiv();
    var BubbleBase_1 = require_BubbleBase();
    var Bubble = class extends BubbleBase_1.BubbleBase {
      load(data) {
        super.load(data);
        if (!(data !== void 0 && data.divs !== void 0)) {
          return;
        }
        if (data.divs instanceof Array) {
          this.divs = data.divs.map((s) => {
            const tmp = new BubbleDiv_1.BubbleDiv();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.divs instanceof Array || !this.divs) {
            this.divs = new BubbleDiv_1.BubbleDiv();
          }
          this.divs.load(data.divs);
        }
      }
    };
    exports.Bubble = Bubble;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/ConnectLinks.js
var require_ConnectLinks = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/ConnectLinks.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectLinks = void 0;
    var ConnectLinks = class {
      constructor() {
        this.opacity = 0.5;
      }
      load(data) {
        if (!(data !== void 0 && data.opacity !== void 0)) {
          return;
        }
        this.opacity = data.opacity;
      }
    };
    exports.ConnectLinks = ConnectLinks;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Connect.js
var require_Connect = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Connect.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Connect = void 0;
    var ConnectLinks_1 = require_ConnectLinks();
    var Connect = class {
      constructor() {
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
      }
      get line_linked() {
        return this.links;
      }
      set line_linked(value) {
        this.links = value;
      }
      get lineLinked() {
        return this.links;
      }
      set lineLinked(value) {
        this.links = value;
      }
      load(data) {
        var _a, _b;
        if (data === void 0) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        if (data.radius !== void 0) {
          this.radius = data.radius;
        }
      }
    };
    exports.Connect = Connect;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/GrabLinks.js
var require_GrabLinks = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/GrabLinks.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GrabLinks = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var GrabLinks = class {
      constructor() {
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.blink !== void 0) {
          this.blink = data.blink;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.consent !== void 0) {
          this.consent = data.consent;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports.GrabLinks = GrabLinks;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Grab.js
var require_Grab = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Grab.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Grab = void 0;
    var GrabLinks_1 = require_GrabLinks();
    var Grab = class {
      constructor() {
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
      }
      get line_linked() {
        return this.links;
      }
      set line_linked(value) {
        this.links = value;
      }
      get lineLinked() {
        return this.links;
      }
      set lineLinked(value) {
        this.links = value;
      }
      load(data) {
        var _a, _b;
        if (data === void 0) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
      }
    };
    exports.Grab = Grab;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Remove.js
var require_Remove = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Remove.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Remove = void 0;
    var Remove = class {
      constructor() {
        this.quantity = 2;
      }
      get particles_nb() {
        return this.quantity;
      }
      set particles_nb(value) {
        this.quantity = value;
      }
      load(data) {
        var _a;
        if (data === void 0) {
          return;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== void 0) {
          this.quantity = quantity;
        }
      }
    };
    exports.Remove = Remove;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Push.js
var require_Push = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Push.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Push = void 0;
    var Push = class {
      constructor() {
        this.default = true;
        this.groups = [];
        this.quantity = 4;
      }
      get particles_nb() {
        return this.quantity;
      }
      set particles_nb(value) {
        this.quantity = value;
      }
      load(data) {
        var _a;
        if (data === void 0) {
          return;
        }
        if (data.default !== void 0) {
          this.default = data.default;
        }
        if (data.groups !== void 0) {
          this.groups = data.groups.map((t) => t);
        }
        if (!this.groups.length) {
          this.default = true;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== void 0) {
          this.quantity = quantity;
        }
      }
    };
    exports.Push = Push;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/RepulseBase.js
var require_RepulseBase = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/RepulseBase.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RepulseBase = void 0;
    var Enums_1 = require_Enums();
    var RepulseBase = class {
      constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = Enums_1.EasingType.easeOutQuad;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        if (data.duration !== void 0) {
          this.duration = data.duration;
        }
        if (data.easing !== void 0) {
          this.easing = data.easing;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
        if (data.maxSpeed !== void 0) {
          this.maxSpeed = data.maxSpeed;
        }
      }
    };
    exports.RepulseBase = RepulseBase;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/RepulseDiv.js
var require_RepulseDiv = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/RepulseDiv.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RepulseDiv = void 0;
    var RepulseBase_1 = require_RepulseBase();
    var RepulseDiv = class extends RepulseBase_1.RepulseBase {
      constructor() {
        super();
        this.selectors = [];
      }
      get ids() {
        if (this.selectors instanceof Array) {
          return this.selectors.map((t) => t.replace("#", ""));
        } else {
          return this.selectors.replace("#", "");
        }
      }
      set ids(value) {
        if (value instanceof Array) {
          this.selectors = value.map(() => `#${value}`);
        } else {
          this.selectors = `#${value}`;
        }
      }
      load(data) {
        super.load(data);
        if (data === void 0) {
          return;
        }
        if (data.ids !== void 0) {
          this.ids = data.ids;
        }
        if (data.selectors !== void 0) {
          this.selectors = data.selectors;
        }
      }
    };
    exports.RepulseDiv = RepulseDiv;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Repulse.js
var require_Repulse2 = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Repulse.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Repulse = void 0;
    var RepulseDiv_1 = require_RepulseDiv();
    var RepulseBase_1 = require_RepulseBase();
    var Repulse = class extends RepulseBase_1.RepulseBase {
      load(data) {
        super.load(data);
        if ((data === null || data === void 0 ? void 0 : data.divs) === void 0) {
          return;
        }
        if (data.divs instanceof Array) {
          this.divs = data.divs.map((s) => {
            const tmp = new RepulseDiv_1.RepulseDiv();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.divs instanceof Array || !this.divs) {
            this.divs = new RepulseDiv_1.RepulseDiv();
          }
          this.divs.load(data.divs);
        }
      }
    };
    exports.Repulse = Repulse;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Slow.js
var require_Slow = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Slow.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Slow = void 0;
    var Slow = class {
      constructor() {
        this.factor = 3;
        this.radius = 200;
      }
      get active() {
        return false;
      }
      set active(_value) {
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
        if (data.radius !== void 0) {
          this.radius = data.radius;
        }
      }
    };
    exports.Slow = Slow;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Trail.js
var require_Trail2 = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Trail.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Trail = void 0;
    var Utils_1 = require_Utils2();
    var Trail = class {
      constructor() {
        this.delay = 1;
        this.pauseOnStop = false;
        this.quantity = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.delay !== void 0) {
          this.delay = data.delay;
        }
        if (data.quantity !== void 0) {
          this.quantity = data.quantity;
        }
        if (data.particles !== void 0) {
          this.particles = (0, Utils_1.deepExtend)({}, data.particles);
        }
        if (data.pauseOnStop !== void 0) {
          this.pauseOnStop = data.pauseOnStop;
        }
      }
    };
    exports.Trail = Trail;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Attract.js
var require_Attract2 = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Attract.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Attract = void 0;
    var Enums_1 = require_Enums();
    var Attract = class {
      constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.easing = Enums_1.EasingType.easeOutQuad;
        this.factor = 1;
        this.maxSpeed = 50;
        this.speed = 1;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
        if (data.duration !== void 0) {
          this.duration = data.duration;
        }
        if (data.easing !== void 0) {
          this.easing = data.easing;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
        if (data.maxSpeed !== void 0) {
          this.maxSpeed = data.maxSpeed;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
      }
    };
    exports.Attract = Attract;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightGradient.js
var require_LightGradient = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightGradient.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightGradient = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var LightGradient = class {
      constructor() {
        this.start = new OptionsColor_1.OptionsColor();
        this.stop = new OptionsColor_1.OptionsColor();
        this.start.value = "#ffffff";
        this.stop.value = "#000000";
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.start = OptionsColor_1.OptionsColor.create(this.start, data.start);
        this.stop = OptionsColor_1.OptionsColor.create(this.stop, data.stop);
      }
    };
    exports.LightGradient = LightGradient;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightArea.js
var require_LightArea = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightArea.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightArea = void 0;
    var LightGradient_1 = require_LightGradient();
    var LightArea = class {
      constructor() {
        this.gradient = new LightGradient_1.LightGradient();
        this.radius = 1e3;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.gradient.load(data.gradient);
        if (data.radius !== void 0) {
          this.radius = data.radius;
        }
      }
    };
    exports.LightArea = LightArea;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightShadow.js
var require_LightShadow = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/LightShadow.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightShadow = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var LightShadow = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.length = 2e3;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.length !== void 0) {
          this.length = data.length;
        }
      }
    };
    exports.LightShadow = LightShadow;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Light.js
var require_Light = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Light.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Light = void 0;
    var LightArea_1 = require_LightArea();
    var LightShadow_1 = require_LightShadow();
    var Light = class {
      constructor() {
        this.area = new LightArea_1.LightArea();
        this.shadow = new LightShadow_1.LightShadow();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.area.load(data.area);
        this.shadow.load(data.shadow);
      }
    };
    exports.Light = Light;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Bounce.js
var require_Bounce2 = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Bounce.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bounce = void 0;
    var Bounce = class {
      constructor() {
        this.distance = 200;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = data.distance;
        }
      }
    };
    exports.Bounce = Bounce;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Modes/Modes.js
var require_Modes2 = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Modes/Modes.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modes = void 0;
    var Bubble_1 = require_Bubble();
    var Connect_1 = require_Connect();
    var Grab_1 = require_Grab();
    var Remove_1 = require_Remove();
    var Push_1 = require_Push();
    var Repulse_1 = require_Repulse2();
    var Slow_1 = require_Slow();
    var Trail_1 = require_Trail2();
    var Attract_1 = require_Attract2();
    var Light_1 = require_Light();
    var Bounce_1 = require_Bounce2();
    var Modes = class {
      constructor() {
        this.attract = new Attract_1.Attract();
        this.bounce = new Bounce_1.Bounce();
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.grab = new Grab_1.Grab();
        this.light = new Light_1.Light();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
        this.trail = new Trail_1.Trail();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        this.attract.load(data.attract);
        this.bubble.load(data.bubble);
        this.connect.load(data.connect);
        this.grab.load(data.grab);
        this.light.load(data.light);
        this.push.load(data.push);
        this.remove.load(data.remove);
        this.repulse.load(data.repulse);
        this.slow.load(data.slow);
        this.trail.load(data.trail);
      }
    };
    exports.Modes = Modes;
  }
});

// node_modules/tsparticles/Options/Classes/Interactivity/Interactivity.js
var require_Interactivity = __commonJS({
  "node_modules/tsparticles/Options/Classes/Interactivity/Interactivity.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interactivity = void 0;
    var Enums_1 = require_Enums();
    var Events_1 = require_Events();
    var Modes_1 = require_Modes2();
    var Interactivity = class {
      constructor() {
        this.detectsOn = Enums_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
      }
      get detect_on() {
        return this.detectsOn;
      }
      set detect_on(value) {
        this.detectsOn = value;
      }
      load(data) {
        var _a, _b, _c;
        if (data === void 0) {
          return;
        }
        const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
        if (detectsOn !== void 0) {
          this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
        if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
          if (this.events.onHover.mode instanceof Array) {
            if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) {
              this.events.onHover.mode.push(Enums_1.HoverMode.slow);
            }
          } else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) {
            this.events.onHover.mode = [this.events.onHover.mode, Enums_1.HoverMode.slow];
          }
        }
      }
    };
    exports.Interactivity = Interactivity;
  }
});

// node_modules/tsparticles/Options/Classes/BackgroundMask/BackgroundMaskCover.js
var require_BackgroundMaskCover = __commonJS({
  "node_modules/tsparticles/Options/Classes/BackgroundMask/BackgroundMaskCover.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BackgroundMaskCover = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var BackgroundMaskCover = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports.BackgroundMaskCover = BackgroundMaskCover;
  }
});

// node_modules/tsparticles/Options/Classes/BackgroundMask/BackgroundMask.js
var require_BackgroundMask = __commonJS({
  "node_modules/tsparticles/Options/Classes/BackgroundMask/BackgroundMask.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BackgroundMask = void 0;
    var BackgroundMaskCover_1 = require_BackgroundMaskCover();
    var BackgroundMask = class {
      constructor() {
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.composite !== void 0) {
          this.composite = data.composite;
        }
        if (data.cover !== void 0) {
          const cover = data.cover;
          const color = typeof data.cover === "string" ? { color: data.cover } : data.cover;
          this.cover.load(cover.color !== void 0 ? cover : { color });
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
      }
    };
    exports.BackgroundMask = BackgroundMask;
  }
});

// node_modules/tsparticles/Options/Classes/Background/Background.js
var require_Background = __commonJS({
  "node_modules/tsparticles/Options/Classes/Background/Background.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Background = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var Background = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== void 0) {
          this.image = data.image;
        }
        if (data.position !== void 0) {
          this.position = data.position;
        }
        if (data.repeat !== void 0) {
          this.repeat = data.repeat;
        }
        if (data.size !== void 0) {
          this.size = data.size;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports.Background = Background;
  }
});

// node_modules/tsparticles/Options/Classes/Theme/ThemeDefault.js
var require_ThemeDefault = __commonJS({
  "node_modules/tsparticles/Options/Classes/Theme/ThemeDefault.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ThemeDefault = void 0;
    var Enums_1 = require_Enums();
    var ThemeDefault = class {
      constructor() {
        this.auto = false;
        this.mode = Enums_1.ThemeMode.any;
        this.value = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.auto !== void 0) {
          this.auto = data.auto;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports.ThemeDefault = ThemeDefault;
  }
});

// node_modules/tsparticles/Options/Classes/Theme/Theme.js
var require_Theme = __commonJS({
  "node_modules/tsparticles/Options/Classes/Theme/Theme.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Theme = void 0;
    var Utils_1 = require_Utils2();
    var ThemeDefault_1 = require_ThemeDefault();
    var Theme = class {
      constructor() {
        this.name = "";
        this.default = new ThemeDefault_1.ThemeDefault();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.name !== void 0) {
          this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== void 0) {
          this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
      }
    };
    exports.Theme = Theme;
  }
});

// node_modules/tsparticles/Options/Classes/FullScreen/FullScreen.js
var require_FullScreen = __commonJS({
  "node_modules/tsparticles/Options/Classes/FullScreen/FullScreen.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FullScreen = void 0;
    var FullScreen = class {
      constructor() {
        this.enable = false;
        this.zIndex = -1;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.zIndex !== void 0) {
          this.zIndex = data.zIndex;
        }
      }
    };
    exports.FullScreen = FullScreen;
  }
});

// node_modules/tsparticles/Options/Classes/Motion/MotionReduce.js
var require_MotionReduce = __commonJS({
  "node_modules/tsparticles/Options/Classes/Motion/MotionReduce.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MotionReduce = void 0;
    var MotionReduce = class {
      constructor() {
        this.factor = 4;
        this.value = true;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports.MotionReduce = MotionReduce;
  }
});

// node_modules/tsparticles/Options/Classes/Motion/Motion.js
var require_Motion = __commonJS({
  "node_modules/tsparticles/Options/Classes/Motion/Motion.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Motion = void 0;
    var MotionReduce_1 = require_MotionReduce();
    var Motion = class {
      constructor() {
        this.disable = false;
        this.reduce = new MotionReduce_1.MotionReduce();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.disable !== void 0) {
          this.disable = data.disable;
        }
        this.reduce.load(data.reduce);
      }
    };
    exports.Motion = Motion;
  }
});

// node_modules/tsparticles/Options/Classes/ManualParticle.js
var require_ManualParticle = __commonJS({
  "node_modules/tsparticles/Options/Classes/ManualParticle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManualParticle = void 0;
    var Utils_1 = require_Utils2();
    var ManualParticle = class {
      load(data) {
        var _a, _b;
        if (!data) {
          return;
        }
        if (data.position !== void 0) {
          this.position = {
            x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
            y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50
          };
        }
        if (data.options !== void 0) {
          this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
      }
    };
    exports.ManualParticle = ManualParticle;
  }
});

// node_modules/tsparticles/Options/Classes/Responsive.js
var require_Responsive = __commonJS({
  "node_modules/tsparticles/Options/Classes/Responsive.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Responsive = void 0;
    var Utils_1 = require_Utils2();
    var Responsive = class {
      constructor() {
        this.maxWidth = Infinity;
        this.options = {};
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.maxWidth !== void 0) {
          this.maxWidth = data.maxWidth;
        }
        if (data.options !== void 0) {
          this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
      }
    };
    exports.Responsive = Responsive;
  }
});

// node_modules/tsparticles/Options/Classes/Options.js
var require_Options = __commonJS({
  "node_modules/tsparticles/Options/Classes/Options.js"(exports) {
    "use strict";
    init_react();
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Options_instances;
    var _Options_findDefaultTheme;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Options = void 0;
    var Interactivity_1 = require_Interactivity();
    var ParticlesOptions_1 = require_ParticlesOptions();
    var BackgroundMask_1 = require_BackgroundMask();
    var Background_1 = require_Background();
    var Utils_1 = require_Utils2();
    var Theme_1 = require_Theme();
    var Enums_1 = require_Enums();
    var FullScreen_1 = require_FullScreen();
    var Motion_1 = require_Motion();
    var ManualParticle_1 = require_ManualParticle();
    var Responsive_1 = require_Responsive();
    var Options = class {
      constructor() {
        _Options_instances.add(this);
        this.autoPlay = true;
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.fullScreen = new FullScreen_1.FullScreen();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 60;
        this.interactivity = new Interactivity_1.Interactivity();
        this.manualParticles = [];
        this.motion = new Motion_1.Motion();
        this.particles = new ParticlesOptions_1.ParticlesOptions();
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.themes = [];
        this.zLayers = 100;
      }
      get fps_limit() {
        return this.fpsLimit;
      }
      set fps_limit(value) {
        this.fpsLimit = value;
      }
      get retina_detect() {
        return this.detectRetina;
      }
      set retina_detect(value) {
        this.detectRetina = value;
      }
      get backgroundMode() {
        return this.fullScreen;
      }
      set backgroundMode(value) {
        this.fullScreen.load(value);
      }
      load(data) {
        var _a, _b, _c, _d, _e;
        if (data === void 0) {
          return;
        }
        if (data.preset !== void 0) {
          if (data.preset instanceof Array) {
            for (const preset of data.preset) {
              this.importPreset(preset);
            }
          } else {
            this.importPreset(data.preset);
          }
        }
        if (data.autoPlay !== void 0) {
          this.autoPlay = data.autoPlay;
        }
        const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
        if (detectRetina !== void 0) {
          this.detectRetina = detectRetina;
        }
        if (data.duration !== void 0) {
          this.duration = data.duration;
        }
        const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
        if (fpsLimit !== void 0) {
          this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== void 0) {
          this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== void 0) {
          this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        if (data.zLayers !== void 0) {
          this.zLayers = data.zLayers;
        }
        this.background.load(data.background);
        const fullScreen = (_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode;
        if (typeof fullScreen === "boolean") {
          this.fullScreen.enable = fullScreen;
        } else {
          this.fullScreen.load(fullScreen);
        }
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles !== void 0) {
          this.manualParticles = data.manualParticles.map((t) => {
            const tmp = new ManualParticle_1.ManualParticle();
            tmp.load(t);
            return tmp;
          });
        }
        this.motion.load(data.motion);
        this.particles.load(data.particles);
        Utils_1.Plugins.loadOptions(this, data);
        if (data.responsive !== void 0) {
          for (const responsive of data.responsive) {
            const optResponsive = new Responsive_1.Responsive();
            optResponsive.load(responsive);
            this.responsive.push(optResponsive);
          }
        }
        this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
        if (data.themes !== void 0) {
          for (const theme of data.themes) {
            const optTheme = new Theme_1.Theme();
            optTheme.load(theme);
            this.themes.push(optTheme);
          }
        }
        this.defaultDarkTheme = (_d = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, Enums_1.ThemeMode.dark)) === null || _d === void 0 ? void 0 : _d.name;
        this.defaultLightTheme = (_e = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, Enums_1.ThemeMode.light)) === null || _e === void 0 ? void 0 : _e.name;
      }
      setTheme(name) {
        if (name) {
          const chosenTheme = this.themes.find((theme) => theme.name === name);
          if (chosenTheme) {
            this.load(chosenTheme.options);
          }
        } else {
          const mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, clientDarkMode ? Enums_1.ThemeMode.dark : Enums_1.ThemeMode.light);
          if (defaultTheme) {
            this.load(defaultTheme.options);
          }
        }
      }
      setResponsive(width, pxRatio, defaultOptions) {
        var _a;
        this.load(defaultOptions);
        this.load((_a = this.responsive.find((t) => t.maxWidth * pxRatio > width)) === null || _a === void 0 ? void 0 : _a.options);
      }
      importPreset(preset) {
        this.load(Utils_1.Plugins.getPreset(preset));
      }
    };
    exports.Options = Options;
    _Options_instances = /* @__PURE__ */ new WeakSet(), _Options_findDefaultTheme = function _Options_findDefaultTheme2(mode) {
      var _a;
      return (_a = this.themes.find((theme) => theme.default.value && theme.default.mode === mode)) !== null && _a !== void 0 ? _a : this.themes.find((theme) => theme.default.value && theme.default.mode === Enums_1.ThemeMode.any);
    };
  }
});

// node_modules/tsparticles/Core/Container.js
var require_Container = __commonJS({
  "node_modules/tsparticles/Core/Container.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Container = void 0;
    var Canvas_1 = require_Canvas();
    var Particles_1 = require_Particles();
    var Retina_1 = require_Retina();
    var FrameManager_1 = require_FrameManager();
    var Options_1 = require_Options();
    var Utils_1 = require_Utils2();
    var Vector_1 = require_Vector();
    var Container = class {
      constructor(id, sourceOptions, ...presets) {
        this.id = id;
        this.fpsLimit = 60;
        this.duration = 0;
        this.lifeTime = 0;
        this.firstStart = true;
        this.started = false;
        this.destroyed = false;
        this.paused = true;
        this.lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.pathGenerator = {
          generate: () => {
            const v = Vector_1.Vector.create(0, 0);
            v.length = Math.random();
            v.angle = Math.random() * Math.PI * 2;
            return v;
          },
          init: () => {
          },
          update: () => {
          }
        };
        this.interactivity = {
          mouse: {
            clicking: false,
            inside: false
          }
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.attract = { particles: [] };
        this.plugins = /* @__PURE__ */ new Map();
        this.drawers = /* @__PURE__ */ new Map();
        this.density = 1;
        this._options = new Options_1.Options();
        this.actualOptions = new Options_1.Options();
        for (const preset of presets) {
          this._options.load(Utils_1.Plugins.getPreset(preset));
        }
        const shapes = Utils_1.Plugins.getSupportedShapes();
        for (const type of shapes) {
          const drawer = Utils_1.Plugins.getShapeDrawer(type);
          if (drawer) {
            this.drawers.set(type, drawer);
          }
        }
        this._options.load(this._sourceOptions);
        this.eventListeners = new Utils_1.EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
          this.intersectionObserver = new IntersectionObserver((entries) => this.intersectionManager(entries));
        }
      }
      get options() {
        return this._options;
      }
      get sourceOptions() {
        return this._sourceOptions;
      }
      play(force) {
        const needsUpdate = this.paused || force;
        if (this.firstStart && !this.actualOptions.autoPlay) {
          this.firstStart = false;
          return;
        }
        if (this.paused) {
          this.paused = false;
        }
        if (needsUpdate) {
          for (const [, plugin] of this.plugins) {
            if (plugin.play) {
              plugin.play();
            }
          }
        }
        this.draw(needsUpdate || false);
      }
      pause() {
        if (this.drawAnimationFrame !== void 0) {
          (0, Utils_1.cancelAnimation)()(this.drawAnimationFrame);
          delete this.drawAnimationFrame;
        }
        if (this.paused) {
          return;
        }
        for (const [, plugin] of this.plugins) {
          if (plugin.pause) {
            plugin.pause();
          }
        }
        if (!this.pageHidden) {
          this.paused = true;
        }
      }
      draw(force) {
        let refreshTime = force;
        this.drawAnimationFrame = (0, Utils_1.animate)()((timestamp) => {
          if (refreshTime) {
            this.lastFrameTime = void 0;
            refreshTime = false;
          }
          this.drawer.nextFrame(timestamp);
        });
      }
      getAnimationStatus() {
        return !this.paused && !this.pageHidden;
      }
      setNoise(noiseOrGenerator, init, update) {
        this.setPath(noiseOrGenerator, init, update);
      }
      setPath(pathOrGenerator, init, update) {
        if (!pathOrGenerator) {
          return;
        }
        if (typeof pathOrGenerator === "function") {
          this.pathGenerator.generate = pathOrGenerator;
          if (init) {
            this.pathGenerator.init = init;
          }
          if (update) {
            this.pathGenerator.update = update;
          }
        } else {
          if (pathOrGenerator.generate) {
            this.pathGenerator.generate = pathOrGenerator.generate;
          }
          if (pathOrGenerator.init) {
            this.pathGenerator.init = pathOrGenerator.init;
          }
          if (pathOrGenerator.update) {
            this.pathGenerator.update = pathOrGenerator.update;
          }
        }
      }
      destroy() {
        this.stop();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers) {
          if (drawer.destroy) {
            drawer.destroy(this);
          }
        }
        for (const key of this.drawers.keys()) {
          this.drawers.delete(key);
        }
        this.destroyed = true;
      }
      exportImg(callback) {
        this.exportImage(callback);
      }
      exportImage(callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
      }
      exportConfiguration() {
        return JSON.stringify(this.actualOptions, void 0, 2);
      }
      refresh() {
        this.stop();
        return this.start();
      }
      reset() {
        this._options = new Options_1.Options();
        return this.refresh();
      }
      stop() {
        if (!this.started) {
          return;
        }
        this.firstStart = true;
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.clear();
        if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
          this.intersectionObserver.observe(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
          if (plugin.stop) {
            plugin.stop();
          }
        }
        for (const key of this.plugins.keys()) {
          this.plugins.delete(key);
        }
        this.particles.linksColors = /* @__PURE__ */ new Map();
        delete this.particles.grabLineColor;
        delete this.particles.linksColor;
      }
      async loadTheme(name) {
        this.currentTheme = name;
        await this.refresh();
      }
      async start() {
        if (this.started) {
          return;
        }
        await this.init();
        this.started = true;
        this.eventListeners.addListeners();
        if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
          this.intersectionObserver.observe(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
          if (plugin.startAsync !== void 0) {
            await plugin.startAsync();
          } else if (plugin.start !== void 0) {
            plugin.start();
          }
        }
        this.play();
      }
      addClickHandler(callback) {
        const el = this.interactivity.element;
        if (!el) {
          return;
        }
        const clickOrTouchHandler = (e, pos, radius) => {
          if (this.destroyed) {
            return;
          }
          const pxRatio = this.retina.pixelRatio, posRetina = {
            x: pos.x * pxRatio,
            y: pos.y * pxRatio
          }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
          callback(e, particles);
        };
        const clickHandler = (e) => {
          if (this.destroyed) {
            return;
          }
          const mouseEvent = e;
          const pos = {
            x: mouseEvent.offsetX || mouseEvent.clientX,
            y: mouseEvent.offsetY || mouseEvent.clientY
          };
          clickOrTouchHandler(e, pos, 1);
        };
        const touchStartHandler = () => {
          if (this.destroyed) {
            return;
          }
          touched = true;
          touchMoved = false;
        };
        const touchMoveHandler = () => {
          if (this.destroyed) {
            return;
          }
          touchMoved = true;
        };
        const touchEndHandler = (e) => {
          var _a, _b, _c;
          if (this.destroyed) {
            return;
          }
          if (touched && !touchMoved) {
            const touchEvent = e;
            let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            if (!lastTouch) {
              lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
              if (!lastTouch) {
                return;
              }
            }
            const canvasRect = (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            const pos = {
              x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
              y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
            };
            clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
          }
          touched = false;
          touchMoved = false;
        };
        const touchCancelHandler = () => {
          if (this.destroyed) {
            return;
          }
          touched = false;
          touchMoved = false;
        };
        let touched = false;
        let touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
      }
      updateActualOptions() {
        this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this.currentTheme);
      }
      async init() {
        this.actualOptions = new Options_1.Options();
        this.actualOptions.load(this._options);
        this.retina.init();
        this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this.duration = (0, Utils_1.getRangeValue)(this.actualOptions.duration);
        this.lifeTime = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
        const availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins) {
          this.plugins.set(id, plugin);
        }
        for (const [, drawer] of this.drawers) {
          if (drawer.init) {
            await drawer.init(this);
          }
        }
        for (const [, plugin] of this.plugins) {
          if (plugin.init) {
            plugin.init(this.actualOptions);
          } else if (plugin.initAsync !== void 0) {
            await plugin.initAsync(this.actualOptions);
          }
        }
        const pathOptions = this.actualOptions.particles.move.path;
        if (pathOptions.generator) {
          const customGenerator = Utils_1.Plugins.getPathGenerator(pathOptions.generator);
          if (customGenerator) {
            if (customGenerator.init) {
              this.pathGenerator.init = customGenerator.init;
            }
            if (customGenerator.generate) {
              this.pathGenerator.generate = customGenerator.generate;
            }
            if (customGenerator.update) {
              this.pathGenerator.update = customGenerator.update;
            }
          }
        }
        this.particles.init();
        this.particles.setDensity();
        for (const [, plugin] of this.plugins) {
          if (plugin.particlesSetup !== void 0) {
            plugin.particlesSetup();
          }
        }
      }
      intersectionManager(entries) {
        if (!this.actualOptions.pauseOnOutsideViewport) {
          return;
        }
        for (const entry of entries) {
          if (entry.target !== this.interactivity.element) {
            continue;
          }
          if (entry.isIntersecting) {
            this.play();
          } else {
            this.pause();
          }
        }
      }
    };
    exports.Container = Container;
  }
});

// node_modules/tsparticles/Core/Loader.js
var require_Loader = __commonJS({
  "node_modules/tsparticles/Core/Loader.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Loader = void 0;
    var Container_1 = require_Container();
    var Utils_1 = require_Utils2();
    var tsParticlesDom = [];
    function fetchError(statusCode) {
      console.error(`Error tsParticles - fetch status: ${statusCode}`);
      console.error("Error tsParticles - File config not found");
    }
    var Loader = class {
      static dom() {
        return tsParticlesDom;
      }
      static domItem(index) {
        const dom = Loader.dom();
        const item = dom[index];
        if (item && !item.destroyed) {
          return item;
        }
        dom.splice(index, 1);
      }
      static async load(tagId, options, index) {
        let domContainer = document.getElementById(tagId);
        if (!domContainer) {
          domContainer = document.createElement("div");
          domContainer.id = tagId;
          document.append(domContainer);
        }
        return Loader.set(tagId, domContainer, options, index);
      }
      static async set(id, domContainer, options, index) {
        const currentOptions = options instanceof Array ? (0, Utils_1.itemFromArray)(options, index) : options;
        const dom = Loader.dom();
        const oldIndex = dom.findIndex((v) => v.id === id);
        if (oldIndex >= 0) {
          const old = Loader.domItem(oldIndex);
          if (old && !old.destroyed) {
            old.destroy();
            dom.splice(oldIndex, 1);
          }
        }
        let canvasEl;
        let generatedCanvas;
        if (domContainer.tagName.toLowerCase() === "canvas") {
          canvasEl = domContainer;
          generatedCanvas = false;
        } else {
          const existingCanvases = domContainer.getElementsByTagName("canvas");
          if (existingCanvases.length) {
            canvasEl = existingCanvases[0];
            if (!canvasEl.className) {
              canvasEl.className = Utils_1.Constants.canvasClass;
            }
            generatedCanvas = false;
          } else {
            generatedCanvas = true;
            canvasEl = document.createElement("canvas");
            canvasEl.className = Utils_1.Constants.canvasClass;
            canvasEl.style.width = "100%";
            canvasEl.style.height = "100%";
            domContainer.appendChild(canvasEl);
          }
        }
        const newItem = new Container_1.Container(id, currentOptions);
        if (oldIndex >= 0) {
          dom.splice(oldIndex, 0, newItem);
        } else {
          dom.push(newItem);
        }
        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
        await newItem.start();
        return newItem;
      }
      static async loadJSON(tagId, jsonUrl, index) {
        const url = jsonUrl instanceof Array ? (0, Utils_1.itemFromArray)(jsonUrl, index) : jsonUrl;
        const response = await fetch(url);
        if (response.ok) {
          return Loader.load(tagId, await response.json());
        } else {
          fetchError(response.status);
        }
      }
      static async setJSON(id, domContainer, jsonUrl, index) {
        const url = jsonUrl instanceof Array ? (0, Utils_1.itemFromArray)(jsonUrl, index) : jsonUrl;
        const response = await fetch(url);
        if (response.ok) {
          const options = await response.json();
          return Loader.set(id, domContainer, options);
        } else {
          fetchError(response.status);
        }
      }
      static setOnClickHandler(callback) {
        const dom = Loader.dom();
        if (dom.length === 0) {
          throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (const domItem of dom) {
          domItem.addClickHandler(callback);
        }
      }
    };
    exports.Loader = Loader;
  }
});

// node_modules/tsparticles/main.js
var require_main = __commonJS({
  "node_modules/tsparticles/main.js"(exports) {
    "use strict";
    init_react();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Main_initialized;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Main = void 0;
    var Utils_1 = require_Utils2();
    var Loader_1 = require_Loader();
    var Main = class {
      constructor() {
        _Main_initialized.set(this, void 0);
        __classPrivateFieldSet(this, _Main_initialized, false, "f");
      }
      init() {
        if (!__classPrivateFieldGet(this, _Main_initialized, "f")) {
          __classPrivateFieldSet(this, _Main_initialized, true, "f");
        }
      }
      async loadFromArray(tagId, options, index) {
        return Loader_1.Loader.load(tagId, options, index);
      }
      async load(tagId, options) {
        return Loader_1.Loader.load(tagId, options);
      }
      async set(id, element, options) {
        return Loader_1.Loader.set(id, element, options);
      }
      loadJSON(tagId, pathConfigJson, index) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson, index);
      }
      async setJSON(id, element, pathConfigJson, index) {
        return Loader_1.Loader.setJSON(id, element, pathConfigJson, index);
      }
      setOnClickHandler(callback) {
        Loader_1.Loader.setOnClickHandler(callback);
      }
      dom() {
        return Loader_1.Loader.dom();
      }
      domItem(index) {
        return Loader_1.Loader.domItem(index);
      }
      addShape(shape, drawer, init, afterEffect, destroy) {
        let customDrawer;
        if (typeof drawer === "function") {
          customDrawer = {
            afterEffect,
            destroy,
            draw: drawer,
            init
          };
        } else {
          customDrawer = drawer;
        }
        Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
      }
      addPreset(preset, options, override = false) {
        Utils_1.Plugins.addPreset(preset, options, override);
      }
      addPlugin(plugin) {
        Utils_1.Plugins.addPlugin(plugin);
      }
      addPathGenerator(name, generator) {
        Utils_1.Plugins.addPathGenerator(name, generator);
      }
      addInteractor(name, interactorInitializer) {
        Utils_1.Plugins.addInteractor(name, interactorInitializer);
      }
      addParticleUpdater(name, updaterInitializer) {
        Utils_1.Plugins.addParticleUpdater(name, updaterInitializer);
      }
    };
    exports.Main = Main;
    _Main_initialized = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/tsparticles/Plugins/Absorbers/AbsorberInstance.js
var require_AbsorberInstance = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/AbsorberInstance.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbsorberInstance = void 0;
    var Utils_1 = require_Utils2();
    var Vector_1 = require_Vector();
    var Enums_1 = require_Enums();
    var AbsorberInstance = class {
      constructor(absorbers, container, options, position) {
        var _a, _b, _c;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position ? Vector_1.Vector.create(position.x, position.y) : void 0;
        this.options = options;
        this.dragging = false;
        this.name = this.options.name;
        this.opacity = this.options.opacity;
        this.size = (0, Utils_1.getRangeValue)(options.size.value) * container.retina.pixelRatio;
        this.mass = this.size * options.size.density * container.retina.reduceFactor;
        const limit = options.size.limit;
        this.limit = limit !== void 0 ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
        const color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = (0, Utils_1.colorToRgb)(color)) !== null && _a !== void 0 ? _a : {
          b: 0,
          g: 0,
          r: 0
        };
        this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
      }
      attract(particle) {
        const container = this.container;
        const options = this.options;
        if (options.draggable) {
          const mouse = container.interactivity.mouse;
          if (mouse.clicking && mouse.downPosition) {
            const mouseDist = (0, Utils_1.getDistance)(this.position, mouse.downPosition);
            if (mouseDist <= this.size) {
              this.dragging = true;
            }
          } else {
            this.dragging = false;
          }
          if (this.dragging && mouse.position) {
            this.position.x = mouse.position.x;
            this.position.y = mouse.position.y;
          }
        }
        const pos = particle.getPosition();
        const { dx, dy, distance } = (0, Utils_1.getDistances)(this.position, pos);
        const v = Vector_1.Vector.create(dx, dy);
        v.length = this.mass / Math.pow(distance, 2) * container.retina.reduceFactor;
        if (distance < this.size + particle.getRadius()) {
          const sizeFactor = particle.getRadius() * 0.033 * container.retina.pixelRatio;
          if (this.size > particle.getRadius() && distance < this.size - particle.getRadius() || particle.absorberOrbit !== void 0 && particle.absorberOrbit.length < 0) {
            if (options.destroy) {
              particle.destroy();
            } else {
              particle.needsNewPosition = true;
              this.updateParticlePosition(particle, v);
            }
          } else {
            if (options.destroy) {
              particle.size.value -= sizeFactor;
            }
            this.updateParticlePosition(particle, v);
          }
          if (this.limit === void 0 || this.size < this.limit) {
            this.size += sizeFactor;
          }
          this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
        } else {
          this.updateParticlePosition(particle, v);
        }
      }
      resize() {
        const initialPosition = this.initialPosition;
        this.position = initialPosition && (0, Utils_1.isPointInside)(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
      }
      draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = (0, Utils_1.getStyleFromRgb)(this.color, this.opacity);
        context.fill();
      }
      calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.options.position;
        return Vector_1.Vector.create(((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width, ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height);
      }
      updateParticlePosition(particle, v) {
        var _a;
        if (particle.destroyed) {
          return;
        }
        const container = this.container;
        const canvasSize = container.canvas.size;
        if (particle.needsNewPosition) {
          const pSize = particle.getRadius();
          particle.position.x = (canvasSize.width - pSize * 2) * (1 + (Math.random() * 0.2 - 0.1)) + pSize;
          particle.position.y = (canvasSize.height - pSize * 2) * (1 + (Math.random() * 0.2 - 0.1)) + pSize;
          particle.needsNewPosition = false;
        }
        if (this.options.orbits) {
          if (particle.absorberOrbit === void 0) {
            particle.absorberOrbit = Vector_1.Vector.create(0, 0);
            particle.absorberOrbit.length = (0, Utils_1.getDistance)(particle.getPosition(), this.position);
            particle.absorberOrbit.angle = Math.random() * Math.PI * 2;
          }
          if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
            const minSize = Math.min(canvasSize.width, canvasSize.height);
            particle.absorberOrbit.length = minSize * (1 + (Math.random() * 0.2 - 0.1));
          }
          if (particle.absorberOrbitDirection === void 0) {
            particle.absorberOrbitDirection = particle.velocity.x >= 0 ? Enums_1.RotateDirection.clockwise : Enums_1.RotateDirection.counterClockwise;
          }
          const orbitRadius = particle.absorberOrbit.length;
          const orbitAngle = particle.absorberOrbit.angle;
          const orbitDirection = particle.absorberOrbitDirection;
          particle.velocity.x = 0;
          particle.velocity.y = 0;
          const updateFunc = {
            x: orbitDirection === Enums_1.RotateDirection.clockwise ? Math.cos : Math.sin,
            y: orbitDirection === Enums_1.RotateDirection.clockwise ? Math.sin : Math.cos
          };
          particle.position.x = this.position.x + orbitRadius * updateFunc.x(orbitAngle);
          particle.position.y = this.position.y + orbitRadius * updateFunc.y(orbitAngle);
          particle.absorberOrbit.length -= v.length;
          particle.absorberOrbit.angle += ((_a = particle.retina.moveSpeed) !== null && _a !== void 0 ? _a : 0) * container.retina.pixelRatio / 100 * container.retina.reduceFactor;
        } else {
          const addV = Vector_1.Vector.origin;
          addV.length = v.length;
          addV.angle = v.angle;
          particle.velocity.addTo(addV);
        }
      }
    };
    exports.AbsorberInstance = AbsorberInstance;
  }
});

// node_modules/tsparticles/Plugins/Absorbers/Options/Classes/AbsorberSize.js
var require_AbsorberSize = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/Options/Classes/AbsorberSize.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbsorberSize = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var AbsorberSize = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.density = 5;
        this.random.minimumValue = 1;
        this.value = 50;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        if (data.density !== void 0) {
          this.density = data.density;
        }
        if (data.limit !== void 0) {
          this.limit = data.limit;
        }
        if (data.limit !== void 0) {
          this.limit = data.limit;
        }
      }
    };
    exports.AbsorberSize = AbsorberSize;
  }
});

// node_modules/tsparticles/Plugins/Absorbers/Options/Classes/Absorber.js
var require_Absorber = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/Options/Classes/Absorber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Absorber = void 0;
    var AbsorberSize_1 = require_AbsorberSize();
    var OptionsColor_1 = require_OptionsColor();
    var Absorber = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.draggable = false;
        this.opacity = 1;
        this.destroy = true;
        this.orbits = false;
        this.size = new AbsorberSize_1.AbsorberSize();
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.draggable !== void 0) {
          this.draggable = data.draggable;
        }
        this.name = data.name;
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
        if (data.position !== void 0) {
          this.position = {
            x: data.position.x,
            y: data.position.y
          };
        }
        if (data.size !== void 0) {
          this.size.load(data.size);
        }
        if (data.destroy !== void 0) {
          this.destroy = data.destroy;
        }
        if (data.orbits !== void 0) {
          this.orbits = data.orbits;
        }
      }
    };
    exports.Absorber = Absorber;
  }
});

// node_modules/tsparticles/Plugins/Absorbers/Enums/AbsorberClickMode.js
var require_AbsorberClickMode = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/Enums/AbsorberClickMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbsorberClickMode = void 0;
    var AbsorberClickMode;
    (function(AbsorberClickMode2) {
      AbsorberClickMode2["absorber"] = "absorber";
    })(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {}));
  }
});

// node_modules/tsparticles/Plugins/Absorbers/Enums/index.js
var require_Enums2 = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/Enums/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_AbsorberClickMode(), exports);
  }
});

// node_modules/tsparticles/Plugins/Absorbers/Absorbers.js
var require_Absorbers = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/Absorbers.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Absorbers = void 0;
    var AbsorberInstance_1 = require_AbsorberInstance();
    var Absorber_1 = require_Absorber();
    var Enums_1 = require_Enums2();
    var Utils_1 = require_Utils2();
    var Absorbers = class {
      constructor(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
        const overridableContainer = container;
        overridableContainer.getAbsorber = (idxOrName) => idxOrName === void 0 || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t) => t.name === idxOrName);
        overridableContainer.addAbsorber = (options, position) => this.addAbsorber(options, position);
      }
      init(options) {
        var _a, _b;
        if (!options) {
          return;
        }
        if (options.absorbers) {
          if (options.absorbers instanceof Array) {
            this.absorbers = options.absorbers.map((s) => {
              const tmp = new Absorber_1.Absorber();
              tmp.load(s);
              return tmp;
            });
          } else {
            if (this.absorbers instanceof Array) {
              this.absorbers = new Absorber_1.Absorber();
            }
            this.absorbers.load(options.absorbers);
          }
        }
        const interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
          if (interactivityAbsorbers instanceof Array) {
            this.interactivityAbsorbers = interactivityAbsorbers.map((s) => {
              const tmp = new Absorber_1.Absorber();
              tmp.load(s);
              return tmp;
            });
          } else {
            if (this.interactivityAbsorbers instanceof Array) {
              this.interactivityAbsorbers = new Absorber_1.Absorber();
            }
            this.interactivityAbsorbers.load(interactivityAbsorbers);
          }
        }
        if (this.absorbers instanceof Array) {
          for (const absorberOptions of this.absorbers) {
            this.addAbsorber(absorberOptions);
          }
        } else {
          this.addAbsorber(this.absorbers);
        }
      }
      particleUpdate(particle) {
        for (const absorber of this.array) {
          absorber.attract(particle);
          if (particle.destroyed) {
            break;
          }
        }
      }
      draw(context) {
        for (const absorber of this.array) {
          context.save();
          absorber.draw(context);
          context.restore();
        }
      }
      stop() {
        this.array = [];
      }
      resize() {
        for (const absorber of this.array) {
          absorber.resize();
        }
      }
      handleClickMode(mode) {
        const container = this.container;
        const absorberOptions = this.absorbers;
        const modeAbsorbers = this.interactivityAbsorbers;
        if (mode === Enums_1.AbsorberClickMode.absorber) {
          let absorbersModeOptions;
          if (modeAbsorbers instanceof Array) {
            if (modeAbsorbers.length > 0) {
              absorbersModeOptions = (0, Utils_1.itemFromArray)(modeAbsorbers);
            }
          } else {
            absorbersModeOptions = modeAbsorbers;
          }
          const absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : absorberOptions instanceof Array ? (0, Utils_1.itemFromArray)(absorberOptions) : absorberOptions;
          const aPosition = container.interactivity.mouse.clickPosition;
          this.addAbsorber(absorbersOptions, aPosition);
        }
      }
      addAbsorber(options, position) {
        const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, options, position);
        this.array.push(absorber);
        return absorber;
      }
      removeAbsorber(absorber) {
        const index = this.array.indexOf(absorber);
        if (index >= 0) {
          this.array.splice(index, 1);
        }
      }
    };
    exports.Absorbers = Absorbers;
  }
});

// node_modules/tsparticles/Plugins/Absorbers/plugin.js
var require_plugin = __commonJS({
  "node_modules/tsparticles/Plugins/Absorbers/plugin.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadAbsorbersPlugin = void 0;
    var Absorbers_1 = require_Absorbers();
    var Enums_1 = require_Enums2();
    var Absorber_1 = require_Absorber();
    var Utils_1 = require_Utils2();
    var Plugin = class {
      constructor() {
        this.id = "absorbers";
      }
      getPlugin(container) {
        return new Absorbers_1.Absorbers(container);
      }
      needsPlugin(options) {
        var _a, _b, _c;
        if (options === void 0) {
          return false;
        }
        const absorbers = options.absorbers;
        let loadAbsorbers = false;
        if (absorbers instanceof Array) {
          if (absorbers.length) {
            loadAbsorbers = true;
          }
        } else if (absorbers !== void 0) {
          loadAbsorbers = true;
        } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && (0, Utils_1.isInArray)(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
          loadAbsorbers = true;
        }
        return loadAbsorbers;
      }
      loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
          return;
        }
        const optionsCast = options;
        if (source === null || source === void 0 ? void 0 : source.absorbers) {
          if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
            optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map((s) => {
              const tmp = new Absorber_1.Absorber();
              tmp.load(s);
              return tmp;
            });
          } else {
            let absorberOptions = optionsCast.absorbers;
            if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === void 0) {
              optionsCast.absorbers = absorberOptions = new Absorber_1.Absorber();
            }
            absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
          }
        }
        const interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
          if (interactivityAbsorbers instanceof Array) {
            optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map((s) => {
              const tmp = new Absorber_1.Absorber();
              tmp.load(s);
              return tmp;
            });
          } else {
            let absorberOptions = optionsCast.interactivity.modes.absorbers;
            if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === void 0) {
              optionsCast.interactivity.modes.absorbers = absorberOptions = new Absorber_1.Absorber();
            }
            absorberOptions.load(interactivityAbsorbers);
          }
        }
      }
    };
    function loadAbsorbersPlugin(tsParticles) {
      const plugin = new Plugin();
      tsParticles.addPlugin(plugin);
    }
    exports.loadAbsorbersPlugin = loadAbsorbersPlugin;
  }
});

// node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterSize.js
var require_EmitterSize = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterSize.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterSize = void 0;
    var Enums_1 = require_Enums();
    var EmitterSize = class {
      constructor() {
        this.mode = Enums_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.height !== void 0) {
          this.height = data.height;
        }
        if (data.width !== void 0) {
          this.width = data.width;
        }
      }
    };
    exports.EmitterSize = EmitterSize;
  }
});

// node_modules/tsparticles/Plugins/Emitters/ShapeManager.js
var require_ShapeManager = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/ShapeManager.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShapeManager = void 0;
    var shapes = /* @__PURE__ */ new Map();
    var ShapeManager = class {
      static addShape(name, drawer) {
        if (!ShapeManager.getShape(name)) {
          shapes.set(name, drawer);
        }
      }
      static getShape(name) {
        return shapes.get(name);
      }
      static getSupportedShapes() {
        return shapes.keys();
      }
    };
    exports.ShapeManager = ShapeManager;
  }
});

// node_modules/tsparticles/Plugins/Emitters/EmitterInstance.js
var require_EmitterInstance = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/EmitterInstance.js"(exports) {
    "use strict";
    init_react();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _EmitterInstance_firstSpawn;
    var _EmitterInstance_startParticlesAdded;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterInstance = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var EmitterSize_1 = require_EmitterSize();
    var ShapeManager_1 = require_ShapeManager();
    var EmitterInstance = class {
      constructor(emitters, container, emitterOptions, position) {
        var _a, _b, _c, _d, _e, _f;
        var _g;
        this.emitters = emitters;
        this.container = container;
        _EmitterInstance_firstSpawn.set(this, void 0);
        _EmitterInstance_startParticlesAdded.set(this, void 0);
        this.currentDuration = 0;
        this.currentEmitDelay = 0;
        this.currentSpawnDelay = 0;
        this.initialPosition = position;
        this.emitterOptions = (0, Utils_1.deepExtend)({}, emitterOptions);
        this.spawnDelay = ((_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0) * 1e3 / this.container.retina.reduceFactor;
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
        this.name = emitterOptions.name;
        this.shape = ShapeManager_1.ShapeManager.getShape(emitterOptions.shape);
        this.fill = emitterOptions.fill;
        __classPrivateFieldSet(this, _EmitterInstance_firstSpawn, !this.emitterOptions.life.wait, "f");
        __classPrivateFieldSet(this, _EmitterInstance_startParticlesAdded, false, "f");
        let particlesOptions = (0, Utils_1.deepExtend)({}, this.emitterOptions.particles);
        particlesOptions !== null && particlesOptions !== void 0 ? particlesOptions : particlesOptions = {};
        (_c = particlesOptions.move) !== null && _c !== void 0 ? _c : particlesOptions.move = {};
        (_d = (_g = particlesOptions.move).direction) !== null && _d !== void 0 ? _d : _g.direction = this.emitterOptions.direction;
        if (this.emitterOptions.spawnColor !== void 0) {
          this.spawnColor = (0, Utils_1.colorToHsl)(this.emitterOptions.spawnColor);
        }
        this.paused = !this.emitterOptions.autoPlay;
        this.particlesOptions = particlesOptions;
        this.size = (_e = this.emitterOptions.size) !== null && _e !== void 0 ? _e : (() => {
          const size = new EmitterSize_1.EmitterSize();
          size.load({
            height: 0,
            mode: Enums_1.SizeMode.percent,
            width: 0
          });
          return size;
        })();
        this.lifeCount = (_f = this.emitterOptions.life.count) !== null && _f !== void 0 ? _f : -1;
        this.immortal = this.lifeCount <= 0;
        this.play();
      }
      externalPlay() {
        this.paused = false;
        this.play();
      }
      externalPause() {
        this.paused = true;
        this.pause();
      }
      play() {
        var _a;
        if (this.paused) {
          return;
        }
        if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count) && (__classPrivateFieldGet(this, _EmitterInstance_firstSpawn, "f") || this.currentSpawnDelay >= ((_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0))) {
          if (this.emitDelay === void 0) {
            const delay = (0, Utils_1.getRangeValue)(this.emitterOptions.rate.delay);
            this.emitDelay = 1e3 * delay / this.container.retina.reduceFactor;
          }
          if (this.lifeCount > 0 || this.immortal) {
            this.prepareToDie();
          }
        }
      }
      pause() {
        if (this.paused) {
          return;
        }
        delete this.emitDelay;
      }
      resize() {
        const initialPosition = this.initialPosition;
        this.position = initialPosition && (0, Utils_1.isPointInside)(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
      }
      update(delta) {
        var _a, _b, _c;
        if (this.paused) {
          return;
        }
        if (__classPrivateFieldGet(this, _EmitterInstance_firstSpawn, "f")) {
          __classPrivateFieldSet(this, _EmitterInstance_firstSpawn, false, "f");
          this.currentSpawnDelay = (_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0;
          this.currentEmitDelay = (_b = this.emitDelay) !== null && _b !== void 0 ? _b : 0;
        }
        if (!__classPrivateFieldGet(this, _EmitterInstance_startParticlesAdded, "f")) {
          __classPrivateFieldSet(this, _EmitterInstance_startParticlesAdded, true, "f");
          this.emitParticles(this.emitterOptions.startCount);
        }
        if (this.duration !== void 0) {
          this.currentDuration += delta.value;
          if (this.currentDuration >= this.duration) {
            this.pause();
            if (this.spawnDelay !== void 0) {
              delete this.spawnDelay;
            }
            if (!this.immortal) {
              this.lifeCount--;
            }
            if (this.lifeCount > 0 || this.immortal) {
              this.position = this.calcPosition();
              this.spawnDelay = ((_c = this.emitterOptions.life.delay) !== null && _c !== void 0 ? _c : 0) * 1e3 / this.container.retina.reduceFactor;
            } else {
              this.destroy();
            }
            this.currentDuration -= this.duration;
            delete this.duration;
          }
        }
        if (this.spawnDelay !== void 0) {
          this.currentSpawnDelay += delta.value;
          if (this.currentSpawnDelay >= this.spawnDelay) {
            this.play();
            this.currentSpawnDelay -= this.currentSpawnDelay;
            delete this.spawnDelay;
          }
        }
        if (this.emitDelay !== void 0) {
          this.currentEmitDelay += delta.value;
          if (this.currentEmitDelay >= this.emitDelay) {
            this.emit();
            this.currentEmitDelay -= this.emitDelay;
          }
        }
      }
      prepareToDie() {
        var _a;
        if (this.paused) {
          return;
        }
        const duration = (_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration;
        if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && duration !== void 0 && duration > 0) {
          this.duration = duration * 1e3;
        }
      }
      destroy() {
        this.emitters.removeEmitter(this);
      }
      calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.emitterOptions.position;
        return {
          x: ((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width,
          y: ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height
        };
      }
      emit() {
        if (this.paused) {
          return;
        }
        const quantity = (0, Utils_1.getRangeValue)(this.emitterOptions.rate.quantity);
        this.emitParticles(quantity);
      }
      emitParticles(quantity) {
        var _a, _b, _c;
        const container = this.container;
        const position = this.position;
        const offset = {
          x: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.width * this.size.width / 100 : this.size.width,
          y: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.height * this.size.height / 100 : this.size.height
        };
        for (let i = 0; i < quantity; i++) {
          const particlesOptions = (0, Utils_1.deepExtend)({}, this.particlesOptions);
          if (this.spawnColor) {
            const colorAnimation = (_a = this.emitterOptions.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;
            if (colorAnimation) {
              const hueAnimation = colorAnimation;
              if (hueAnimation.enable) {
                this.spawnColor.h = this.setColorAnimation(hueAnimation, this.spawnColor.h, 360);
              } else {
                const hslAnimation = colorAnimation;
                this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
              }
            }
            if (!particlesOptions.color) {
              particlesOptions.color = {
                value: this.spawnColor
              };
            } else {
              particlesOptions.color.value = this.spawnColor;
            }
          }
          const pPosition = (_c = (_b = this.shape) === null || _b === void 0 ? void 0 : _b.randomPosition(position, offset, this.fill)) !== null && _c !== void 0 ? _c : position;
          container.particles.addParticle(pPosition, particlesOptions);
        }
      }
      setColorAnimation(animation, initValue, maxValue) {
        var _a;
        const container = this.container;
        if (!animation.enable) {
          return initValue;
        }
        const colorOffset = (0, Utils_1.randomInRange)(animation.offset);
        const delay = (0, Utils_1.getRangeValue)(this.emitterOptions.rate.delay);
        const emitFactor = 1e3 * delay / container.retina.reduceFactor;
        const colorSpeed = (_a = animation.speed) !== null && _a !== void 0 ? _a : 0;
        return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * 3.6) % maxValue;
      }
    };
    exports.EmitterInstance = EmitterInstance;
    _EmitterInstance_firstSpawn = /* @__PURE__ */ new WeakMap(), _EmitterInstance_startParticlesAdded = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterRate.js
var require_EmitterRate = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterRate.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterRate = void 0;
    var Utils_1 = require_Utils2();
    var EmitterRate = class {
      constructor() {
        this.quantity = 1;
        this.delay = 0.1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.quantity !== void 0) {
          this.quantity = (0, Utils_1.setRangeValue)(data.quantity);
        }
        if (data.delay !== void 0) {
          this.delay = (0, Utils_1.setRangeValue)(data.delay);
        }
      }
    };
    exports.EmitterRate = EmitterRate;
  }
});

// node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterLife.js
var require_EmitterLife = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Options/Classes/EmitterLife.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterLife = void 0;
    var EmitterLife = class {
      constructor() {
        this.wait = false;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        if (data.delay !== void 0) {
          this.delay = data.delay;
        }
        if (data.duration !== void 0) {
          this.duration = data.duration;
        }
        if (data.wait !== void 0) {
          this.wait = data.wait;
        }
      }
    };
    exports.EmitterLife = EmitterLife;
  }
});

// node_modules/tsparticles/Plugins/Emitters/Enums/EmitterClickMode.js
var require_EmitterClickMode = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Enums/EmitterClickMode.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterClickMode = void 0;
    var EmitterClickMode;
    (function(EmitterClickMode2) {
      EmitterClickMode2["emitter"] = "emitter";
    })(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {}));
  }
});

// node_modules/tsparticles/Plugins/Emitters/Enums/EmitterShapeType.js
var require_EmitterShapeType = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Enums/EmitterShapeType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterShapeType = void 0;
    var EmitterShapeType;
    (function(EmitterShapeType2) {
      EmitterShapeType2["circle"] = "circle";
      EmitterShapeType2["square"] = "square";
    })(EmitterShapeType = exports.EmitterShapeType || (exports.EmitterShapeType = {}));
  }
});

// node_modules/tsparticles/Plugins/Emitters/Enums/index.js
var require_Enums3 = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Enums/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_EmitterClickMode(), exports);
    __exportStar(require_EmitterShapeType(), exports);
  }
});

// node_modules/tsparticles/Plugins/Emitters/Options/Classes/Emitter.js
var require_Emitter = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Options/Classes/Emitter.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = void 0;
    var EmitterRate_1 = require_EmitterRate();
    var EmitterLife_1 = require_EmitterLife();
    var Utils_1 = require_Utils2();
    var EmitterSize_1 = require_EmitterSize();
    var AnimatableColor_1 = require_AnimatableColor();
    var Enums_1 = require_Enums3();
    var Emitter = class {
      constructor() {
        this.autoPlay = true;
        this.fill = true;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
        this.shape = Enums_1.EmitterShapeType.square;
        this.startCount = 0;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.autoPlay !== void 0) {
          this.autoPlay = data.autoPlay;
        }
        if (data.size !== void 0) {
          if (this.size === void 0) {
            this.size = new EmitterSize_1.EmitterSize();
          }
          this.size.load(data.size);
        }
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        if (data.fill !== void 0) {
          this.fill = data.fill;
        }
        this.life.load(data.life);
        this.name = data.name;
        if (data.particles !== void 0) {
          this.particles = (0, Utils_1.deepExtend)({}, data.particles);
        }
        this.rate.load(data.rate);
        if (data.shape !== void 0) {
          this.shape = data.shape;
        }
        if (data.position !== void 0) {
          this.position = {
            x: data.position.x,
            y: data.position.y
          };
        }
        if (data.spawnColor !== void 0) {
          if (this.spawnColor === void 0) {
            this.spawnColor = new AnimatableColor_1.AnimatableColor();
          }
          this.spawnColor.load(data.spawnColor);
        }
        if (data.startCount !== void 0) {
          this.startCount = data.startCount;
        }
      }
    };
    exports.Emitter = Emitter;
  }
});

// node_modules/tsparticles/Plugins/Emitters/Emitters.js
var require_Emitters = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Emitters.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitters = void 0;
    var EmitterInstance_1 = require_EmitterInstance();
    var Emitter_1 = require_Emitter();
    var Enums_1 = require_Enums3();
    var Utils_1 = require_Utils2();
    var Emitters = class {
      constructor(container) {
        this.container = container;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
        const overridableContainer = container;
        overridableContainer.getEmitter = (idxOrName) => idxOrName === void 0 || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t) => t.name === idxOrName);
        overridableContainer.addEmitter = (options, position) => this.addEmitter(options, position);
        overridableContainer.playEmitter = (idxOrName) => {
          const emitter = overridableContainer.getEmitter(idxOrName);
          if (emitter) {
            emitter.externalPlay();
          }
        };
        overridableContainer.pauseEmitter = (idxOrName) => {
          const emitter = overridableContainer.getEmitter(idxOrName);
          if (emitter) {
            emitter.externalPause();
          }
        };
      }
      init(options) {
        var _a, _b;
        if (!options) {
          return;
        }
        if (options.emitters) {
          if (options.emitters instanceof Array) {
            this.emitters = options.emitters.map((s) => {
              const tmp = new Emitter_1.Emitter();
              tmp.load(s);
              return tmp;
            });
          } else {
            if (this.emitters instanceof Array) {
              this.emitters = new Emitter_1.Emitter();
            }
            this.emitters.load(options.emitters);
          }
        }
        const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
          if (interactivityEmitters instanceof Array) {
            this.interactivityEmitters = interactivityEmitters.map((s) => {
              const tmp = new Emitter_1.Emitter();
              tmp.load(s);
              return tmp;
            });
          } else {
            if (this.interactivityEmitters instanceof Array) {
              this.interactivityEmitters = new Emitter_1.Emitter();
            }
            this.interactivityEmitters.load(interactivityEmitters);
          }
        }
        if (this.emitters instanceof Array) {
          for (const emitterOptions of this.emitters) {
            this.addEmitter(emitterOptions);
          }
        } else {
          this.addEmitter(this.emitters);
        }
      }
      play() {
        for (const emitter of this.array) {
          emitter.play();
        }
      }
      pause() {
        for (const emitter of this.array) {
          emitter.pause();
        }
      }
      stop() {
        this.array = [];
      }
      update(delta) {
        for (const emitter of this.array) {
          emitter.update(delta);
        }
      }
      handleClickMode(mode) {
        const container = this.container;
        const emitterOptions = this.emitters;
        const modeEmitters = this.interactivityEmitters;
        if (mode === Enums_1.EmitterClickMode.emitter) {
          let emitterModeOptions;
          if (modeEmitters instanceof Array) {
            if (modeEmitters.length > 0) {
              emitterModeOptions = (0, Utils_1.itemFromArray)(modeEmitters);
            }
          } else {
            emitterModeOptions = modeEmitters;
          }
          const emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : emitterOptions instanceof Array ? (0, Utils_1.itemFromArray)(emitterOptions) : emitterOptions;
          const ePosition = container.interactivity.mouse.clickPosition;
          this.addEmitter((0, Utils_1.deepExtend)({}, emittersOptions), ePosition);
        }
      }
      resize() {
        for (const emitter of this.array) {
          emitter.resize();
        }
      }
      addEmitter(options, position) {
        const emitter = new EmitterInstance_1.EmitterInstance(this, this.container, options, position);
        this.array.push(emitter);
        return emitter;
      }
      removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
          this.array.splice(index, 1);
        }
      }
    };
    exports.Emitters = Emitters;
  }
});

// node_modules/tsparticles/Plugins/Emitters/Shapes/Circle/CircleShape.js
var require_CircleShape = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Shapes/Circle/CircleShape.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CircleShape = void 0;
    var CircleShape = class {
      randomPosition(position, offset, fill) {
        const generateTheta = (x, y) => {
          const u = Math.random() / 4;
          const theta = Math.atan(y / x * Math.tan(2 * Math.PI * u));
          const v = Math.random();
          if (v < 0.25) {
            return theta;
          } else if (v < 0.5) {
            return Math.PI - theta;
          } else if (v < 0.75) {
            return Math.PI + theta;
          } else {
            return -theta;
          }
        };
        const radius = (x, y, theta) => x * y / Math.sqrt((y * Math.cos(theta)) ** 2 + (x * Math.sin(theta)) ** 2);
        const [a, b] = [offset.x / 2, offset.y / 2];
        const randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt(Math.random()) : maxRadius;
        return {
          x: position.x + randomRadius * Math.cos(randomTheta),
          y: position.y + randomRadius * Math.sin(randomTheta)
        };
      }
    };
    exports.CircleShape = CircleShape;
  }
});

// node_modules/tsparticles/Plugins/Emitters/Shapes/Square/SquareShape.js
var require_SquareShape = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/Shapes/Square/SquareShape.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SquareShape = void 0;
    function randomSquareCoordinate(position, offset) {
      return position + offset * (Math.random() - 0.5);
    }
    var SquareShape = class {
      randomPosition(position, offset, fill) {
        if (fill) {
          return {
            x: randomSquareCoordinate(position.x, offset.x),
            y: randomSquareCoordinate(position.y, offset.y)
          };
        } else {
          const halfW = offset.x / 2, halfH = offset.y / 2, side = Math.floor(Math.random() * 4), v = (Math.random() - 0.5) * 2;
          switch (side) {
            case 0:
              return {
                x: position.x + v * halfW,
                y: position.y - halfH
              };
            case 1:
              return {
                x: position.x - halfW,
                y: position.y + v * halfH
              };
            case 2:
              return {
                x: position.x + v * halfW,
                y: position.y + halfH
              };
            case 3:
            default:
              return {
                x: position.x + halfW,
                y: position.y + v * halfH
              };
          }
        }
      }
    };
    exports.SquareShape = SquareShape;
  }
});

// node_modules/tsparticles/Plugins/Emitters/EmittersMain.js
var require_EmittersMain = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/EmittersMain.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Plugins/Emitters/plugin.js
var require_plugin2 = __commonJS({
  "node_modules/tsparticles/Plugins/Emitters/plugin.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadEmittersPlugin = void 0;
    var Utils_1 = require_Utils2();
    var Emitters_1 = require_Emitters();
    var Enums_1 = require_Enums3();
    var Emitter_1 = require_Emitter();
    var ShapeManager_1 = require_ShapeManager();
    var CircleShape_1 = require_CircleShape();
    var SquareShape_1 = require_SquareShape();
    var EmittersPlugin = class {
      constructor() {
        this.id = "emitters";
      }
      getPlugin(container) {
        return new Emitters_1.Emitters(container);
      }
      needsPlugin(options) {
        var _a, _b, _c;
        if (options === void 0) {
          return false;
        }
        const emitters = options.emitters;
        return emitters instanceof Array && !!emitters.length || emitters !== void 0 || !!((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && (0, Utils_1.isInArray)(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode);
      }
      loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
          return;
        }
        const optionsCast = options;
        if (source === null || source === void 0 ? void 0 : source.emitters) {
          if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
            optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map((s) => {
              const tmp = new Emitter_1.Emitter();
              tmp.load(s);
              return tmp;
            });
          } else {
            let emitterOptions = optionsCast.emitters;
            if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === void 0) {
              optionsCast.emitters = emitterOptions = new Emitter_1.Emitter();
            }
            emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
          }
        }
        const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
          if (interactivityEmitters instanceof Array) {
            optionsCast.interactivity.modes.emitters = interactivityEmitters.map((s) => {
              const tmp = new Emitter_1.Emitter();
              tmp.load(s);
              return tmp;
            });
          } else {
            let emitterOptions = optionsCast.interactivity.modes.emitters;
            if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === void 0) {
              optionsCast.interactivity.modes.emitters = emitterOptions = new Emitter_1.Emitter();
            }
            emitterOptions.load(interactivityEmitters);
          }
        }
      }
    };
    function loadEmittersPlugin(tsParticles) {
      const plugin = new EmittersPlugin();
      tsParticles.addPlugin(plugin);
      if (!tsParticles.addEmitterShape) {
        tsParticles.addEmitterShape = (name, shape) => {
          ShapeManager_1.ShapeManager.addShape(name, shape);
        };
      }
      tsParticles.addEmitterShape(Enums_1.EmitterShapeType.circle, new CircleShape_1.CircleShape());
      tsParticles.addEmitterShape(Enums_1.EmitterShapeType.square, new SquareShape_1.SquareShape());
    }
    exports.loadEmittersPlugin = loadEmittersPlugin;
    __exportStar(require_EmittersMain(), exports);
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Enums/InlineArrangement.js
var require_InlineArrangement = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Enums/InlineArrangement.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineArrangement = void 0;
    var InlineArrangement;
    (function(InlineArrangement2) {
      InlineArrangement2["equidistant"] = "equidistant";
      InlineArrangement2["onePerPoint"] = "one-per-point";
      InlineArrangement2["perPoint"] = "per-point";
      InlineArrangement2["randomLength"] = "random-length";
      InlineArrangement2["randomPoint"] = "random-point";
    })(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {}));
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Enums/MoveType.js
var require_MoveType = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Enums/MoveType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveType = void 0;
    var MoveType;
    (function(MoveType2) {
      MoveType2["path"] = "path";
      MoveType2["radius"] = "radius";
    })(MoveType = exports.MoveType || (exports.MoveType = {}));
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Enums/Type.js
var require_Type = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Enums/Type.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Type = void 0;
    var Type;
    (function(Type2) {
      Type2["inline"] = "inline";
      Type2["inside"] = "inside";
      Type2["outside"] = "outside";
      Type2["none"] = "none";
    })(Type = exports.Type || (exports.Type = {}));
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Enums/index.js
var require_Enums4 = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Enums/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_InlineArrangement(), exports);
    __exportStar(require_MoveType(), exports);
    __exportStar(require_Type(), exports);
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/DrawStroke.js
var require_DrawStroke = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/DrawStroke.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DrawStroke = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var Utils_1 = require_Utils2();
    var DrawStroke = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
      }
      load(data) {
        var _a;
        if (data !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
          if (typeof this.color.value === "string") {
            this.opacity = (_a = (0, Utils_1.stringToAlpha)(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
          }
          if (data.opacity !== void 0) {
            this.opacity = data.opacity;
          }
          if (data.width !== void 0) {
            this.width = data.width;
          }
        }
      }
    };
    exports.DrawStroke = DrawStroke;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Draw.js
var require_Draw = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Draw.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Draw = void 0;
    var DrawStroke_1 = require_DrawStroke();
    var OptionsColor_1 = require_OptionsColor();
    var Draw = class {
      constructor() {
        this.enable = false;
        this.stroke = new DrawStroke_1.DrawStroke();
      }
      get lineWidth() {
        return this.stroke.width;
      }
      set lineWidth(value) {
        this.stroke.width = value;
      }
      get lineColor() {
        return this.stroke.color;
      }
      set lineColor(value) {
        this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
      }
      load(data) {
        var _a;
        if (data !== void 0) {
          if (data.enable !== void 0) {
            this.enable = data.enable;
          }
          const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
            color: data.lineColor,
            width: data.lineWidth
          };
          this.stroke.load(stroke);
        }
      }
    };
    exports.Draw = Draw;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Move.js
var require_Move2 = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Move.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Move = void 0;
    var Enums_1 = require_Enums4();
    var Move = class {
      constructor() {
        this.radius = 10;
        this.type = Enums_1.MoveType.path;
      }
      load(data) {
        if (data !== void 0) {
          if (data.radius !== void 0) {
            this.radius = data.radius;
          }
          if (data.type !== void 0) {
            this.type = data.type;
          }
        }
      }
    };
    exports.Move = Move;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Inline.js
var require_Inline = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/Inline.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Inline = void 0;
    var Enums_1 = require_Enums4();
    var Inline = class {
      constructor() {
        this.arrangement = Enums_1.InlineArrangement.onePerPoint;
      }
      load(data) {
        if (data !== void 0) {
          if (data.arrangement !== void 0) {
            this.arrangement = data.arrangement;
          }
        }
      }
    };
    exports.Inline = Inline;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/LocalSvg.js
var require_LocalSvg = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/LocalSvg.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LocalSvg = void 0;
    var LocalSvg = class {
      constructor() {
        this.path = [];
        this.size = {
          height: 0,
          width: 0
        };
      }
      load(data) {
        if (data !== void 0) {
          if (data.path !== void 0) {
            this.path = data.path;
          }
          if (data.size !== void 0) {
            if (data.size.width !== void 0) {
              this.size.width = data.size.width;
            }
            if (data.size.height !== void 0) {
              this.size.height = data.size.height;
            }
          }
        }
      }
    };
    exports.LocalSvg = LocalSvg;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/PolygonMask.js
var require_PolygonMask = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/Options/Classes/PolygonMask.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PolygonMask = void 0;
    var Enums_1 = require_Enums4();
    var Draw_1 = require_Draw();
    var Move_1 = require_Move2();
    var Inline_1 = require_Inline();
    var LocalSvg_1 = require_LocalSvg();
    var Utils_1 = require_Utils2();
    var PolygonMask = class {
      constructor() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new Inline_1.Inline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = Enums_1.Type.none;
      }
      get inlineArrangement() {
        return this.inline.arrangement;
      }
      set inlineArrangement(value) {
        this.inline.arrangement = value;
      }
      load(data) {
        var _a;
        if (data !== void 0) {
          this.draw.load(data.draw);
          const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
            arrangement: data.inlineArrangement
          };
          if (inline !== void 0) {
            this.inline.load(inline);
          }
          this.move.load(data.move);
          if (data.scale !== void 0) {
            this.scale = data.scale;
          }
          if (data.type !== void 0) {
            this.type = data.type;
          }
          if (data.enable !== void 0) {
            this.enable = data.enable;
          } else {
            this.enable = this.type !== Enums_1.Type.none;
          }
          if (data.url !== void 0) {
            this.url = data.url;
          }
          if (data.data !== void 0) {
            if (typeof data.data === "string") {
              this.data = data.data;
            } else {
              this.data = new LocalSvg_1.LocalSvg();
              this.data.load(data.data);
            }
          }
          if (data.position !== void 0) {
            this.position = (0, Utils_1.deepExtend)({}, data.position);
          }
        }
      }
    };
    exports.PolygonMask = PolygonMask;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/utils.js
var require_utils = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/utils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.segmentBounce = exports.calcClosestPtOnSegment = exports.parsePaths = exports.drawPolygonMaskPath = exports.drawPolygonMask = void 0;
    var Utils_1 = require_Utils2();
    function drawPolygonMask(context, rawData, stroke) {
      const color = (0, Utils_1.colorToRgb)(stroke.color);
      if (!color) {
        return;
      }
      context.beginPath();
      context.moveTo(rawData[0].x, rawData[0].y);
      for (const item of rawData) {
        context.lineTo(item.x, item.y);
      }
      context.closePath();
      context.strokeStyle = (0, Utils_1.getStyleFromRgb)(color);
      context.lineWidth = stroke.width;
      context.stroke();
    }
    exports.drawPolygonMask = drawPolygonMask;
    function drawPolygonMaskPath(context, path, stroke, position) {
      context.translate(position.x, position.y);
      const color = (0, Utils_1.colorToRgb)(stroke.color);
      if (!color) {
        return;
      }
      context.strokeStyle = (0, Utils_1.getStyleFromRgb)(color, stroke.opacity);
      context.lineWidth = stroke.width;
      context.stroke(path);
    }
    exports.drawPolygonMaskPath = drawPolygonMaskPath;
    function parsePaths(paths, scale, offset) {
      var _a;
      const res = [];
      for (const path of paths) {
        const segments = path.element.pathSegList;
        const len = (_a = segments === null || segments === void 0 ? void 0 : segments.numberOfItems) !== null && _a !== void 0 ? _a : 0;
        const p = {
          x: 0,
          y: 0
        };
        for (let i = 0; i < len; i++) {
          const segment = segments === null || segments === void 0 ? void 0 : segments.getItem(i);
          const svgPathSeg = window.SVGPathSeg;
          switch (segment === null || segment === void 0 ? void 0 : segment.pathSegType) {
            case svgPathSeg.PATHSEG_MOVETO_ABS:
            case svgPathSeg.PATHSEG_LINETO_ABS:
            case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
            case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
            case svgPathSeg.PATHSEG_ARC_ABS:
            case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
            case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
              const absSeg = segment;
              p.x = absSeg.x;
              p.y = absSeg.y;
              break;
            }
            case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
              p.x = segment.x;
              break;
            case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
              p.y = segment.y;
              break;
            case svgPathSeg.PATHSEG_LINETO_REL:
            case svgPathSeg.PATHSEG_MOVETO_REL:
            case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
            case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
            case svgPathSeg.PATHSEG_ARC_REL:
            case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
            case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
              const relSeg = segment;
              p.x += relSeg.x;
              p.y += relSeg.y;
              break;
            }
            case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
              p.x += segment.x;
              break;
            case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
              p.y += segment.y;
              break;
            case svgPathSeg.PATHSEG_UNKNOWN:
            case svgPathSeg.PATHSEG_CLOSEPATH:
              continue;
          }
          res.push({
            x: p.x * scale + offset.x,
            y: p.y * scale + offset.y
          });
        }
      }
      return res;
    }
    exports.parsePaths = parsePaths;
    function calcClosestPtOnSegment(s1, s2, pos) {
      const { dx, dy } = (0, Utils_1.getDistances)(pos, s1);
      const { dx: dxx, dy: dyy } = (0, Utils_1.getDistances)(s2, s1);
      const t = (dx * dxx + dy * dyy) / (dxx ** 2 + dyy ** 2);
      let x = s1.x + dxx * t;
      let y = s1.y + dyy * t;
      if (t < 0) {
        x = s1.x;
        y = s1.y;
      } else if (t > 1) {
        x = s2.x;
        y = s2.y;
      }
      return { x, y, isOnSegment: t >= 0 && t <= 1 };
    }
    exports.calcClosestPtOnSegment = calcClosestPtOnSegment;
    function segmentBounce(start, stop, velocity) {
      const { dx, dy } = (0, Utils_1.getDistances)(start, stop);
      const wallAngle = Math.atan2(dy, dx);
      const wallNormalX = Math.sin(wallAngle);
      const wallNormalY = -Math.cos(wallAngle);
      const d = 2 * (velocity.x * wallNormalX + velocity.y * wallNormalY);
      velocity.x -= d * wallNormalX;
      velocity.y -= d * wallNormalY;
    }
    exports.segmentBounce = segmentBounce;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/PolygonMaskInstance.js
var require_PolygonMaskInstance = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/PolygonMaskInstance.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PolygonMaskInstance = void 0;
    var Enums_1 = require_Enums4();
    var Utils_1 = require_Utils2();
    var PolygonMask_1 = require_PolygonMask();
    var Enums_2 = require_Enums();
    var utils_1 = require_utils();
    var PolygonMaskInstance = class {
      constructor(container) {
        this.container = container;
        this.dimension = {
          height: 0,
          width: 0
        };
        this.path2DSupported = !!window.Path2D;
        this.options = new PolygonMask_1.PolygonMask();
        this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
      }
      async initAsync(options) {
        this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
        const polygonMaskOptions = this.options;
        this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
        if (polygonMaskOptions.enable) {
          await this.initRawData();
        }
      }
      resize() {
        const container = this.container;
        const options = this.options;
        if (!(options.enable && options.type !== Enums_1.Type.none)) {
          return;
        }
        if (this.redrawTimeout) {
          clearTimeout(this.redrawTimeout);
        }
        this.redrawTimeout = window.setTimeout(async () => {
          await this.initRawData(true);
          container.particles.redraw();
        }, 250);
      }
      stop() {
        delete this.raw;
        delete this.paths;
      }
      particlesInitialization() {
        const options = this.options;
        if (options.enable && options.type === Enums_1.Type.inline && (options.inline.arrangement === Enums_1.InlineArrangement.onePerPoint || options.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
          this.drawPoints();
          return true;
        }
        return false;
      }
      particlePosition(position) {
        var _a, _b;
        const options = this.options;
        if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
          return;
        }
        return (0, Utils_1.deepExtend)({}, position ? position : this.randomPoint());
      }
      particleBounce(particle, delta, direction) {
        return this.polygonBounce(particle, delta, direction);
      }
      clickPositionValid(position) {
        const options = this.options;
        return options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline && this.checkInsidePolygon(position);
      }
      draw(context) {
        var _a;
        if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
          return;
        }
        const options = this.options;
        const polygonDraw = options.draw;
        if (!(options.enable && polygonDraw.enable)) {
          return;
        }
        const rawData = this.raw;
        for (const path of this.paths) {
          const path2d = path.path2d;
          const path2dSupported = this.path2DSupported;
          if (!context) {
            continue;
          }
          if (path2dSupported && path2d && this.offset) {
            (0, utils_1.drawPolygonMaskPath)(context, path2d, polygonDraw.stroke, this.offset);
          } else if (rawData) {
            (0, utils_1.drawPolygonMask)(context, rawData, polygonDraw.stroke);
          }
        }
      }
      polygonBounce(particle, _delta, direction) {
        const options = this.options;
        if (!this.raw || !options.enable || direction !== Enums_2.OutModeDirection.top) {
          return false;
        }
        if (options.type === Enums_1.Type.inside || options.type === Enums_1.Type.outside) {
          let closest, dx, dy;
          const pos = particle.getPosition(), radius = particle.getRadius();
          for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            const pi = this.raw[i], pj = this.raw[j];
            closest = (0, utils_1.calcClosestPtOnSegment)(pi, pj, pos);
            const dist = (0, Utils_1.getDistances)(pos, closest);
            [dx, dy] = [dist.dx, dist.dy];
            if (dist.distance < radius) {
              (0, utils_1.segmentBounce)(pi, pj, particle.velocity);
              return true;
            }
          }
          if (closest && dx !== void 0 && dy !== void 0 && !this.checkInsidePolygon(pos)) {
            const factor = { x: 1, y: 1 };
            if (particle.position.x >= closest.x) {
              factor.x = -1;
            }
            if (particle.position.y >= closest.y) {
              factor.y = -1;
            }
            particle.position.x = closest.x + radius * 2 * factor.x;
            particle.position.y = closest.y + radius * 2 * factor.y;
            particle.velocity.mult(-1);
            return true;
          }
        } else if (options.type === Enums_1.Type.inline && particle.initialPosition) {
          const dist = (0, Utils_1.getDistance)(particle.initialPosition, particle.getPosition());
          if (dist > this.polygonMaskMoveRadius) {
            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
            return true;
          }
        }
        return false;
      }
      checkInsidePolygon(position) {
        var _a, _b;
        const container = this.container;
        const options = this.options;
        if (!options.enable || options.type === Enums_1.Type.none || options.type === Enums_1.Type.inline) {
          return true;
        }
        if (!this.raw) {
          throw new Error(Utils_1.Constants.noPolygonFound);
        }
        const canvasSize = container.canvas.size;
        const x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
        const y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
        let inside = false;
        for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
          const pi = this.raw[i];
          const pj = this.raw[j];
          const intersect = pi.y > y !== pj.y > y && x < (pj.x - pi.x) * (y - pi.y) / (pj.y - pi.y) + pi.x;
          if (intersect) {
            inside = !inside;
          }
        }
        return options.type === Enums_1.Type.inside ? inside : options.type === Enums_1.Type.outside ? !inside : false;
      }
      parseSvgPath(xml, force) {
        var _a, _b, _c;
        const forceDownload = force !== null && force !== void 0 ? force : false;
        if (this.paths !== void 0 && !forceDownload) {
          return this.raw;
        }
        const container = this.container;
        const options = this.options;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "image/svg+xml");
        const svg = doc.getElementsByTagName("svg")[0];
        let svgPaths = svg.getElementsByTagName("path");
        if (!svgPaths.length) {
          svgPaths = doc.getElementsByTagName("path");
        }
        this.paths = [];
        for (let i = 0; i < svgPaths.length; i++) {
          const path = svgPaths.item(i);
          if (path) {
            this.paths.push({
              element: path,
              length: path.getTotalLength()
            });
          }
        }
        const pxRatio = container.retina.pixelRatio;
        const scale = options.scale / pxRatio;
        this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
        this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
        const position = (_c = options.position) !== null && _c !== void 0 ? _c : {
          x: 50,
          y: 50
        };
        this.offset = {
          x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
          y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2
        };
        return (0, utils_1.parsePaths)(this.paths, scale, this.offset);
      }
      async downloadSvgPath(svgUrl, force) {
        const options = this.options;
        const url = svgUrl || options.url;
        const forceDownload = force !== null && force !== void 0 ? force : false;
        if (!url || this.paths !== void 0 && !forceDownload) {
          return this.raw;
        }
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("tsParticles Error - Error occurred during polygon mask download");
        }
        return this.parseSvgPath(await req.text(), force);
      }
      drawPoints() {
        if (!this.raw) {
          return;
        }
        for (const item of this.raw) {
          this.container.particles.addParticle({
            x: item.x,
            y: item.y
          });
        }
      }
      randomPoint() {
        const container = this.container;
        const options = this.options;
        let position;
        if (options.type === Enums_1.Type.inline) {
          switch (options.inline.arrangement) {
            case Enums_1.InlineArrangement.randomPoint:
              position = this.getRandomPoint();
              break;
            case Enums_1.InlineArrangement.randomLength:
              position = this.getRandomPointByLength();
              break;
            case Enums_1.InlineArrangement.equidistant:
              position = this.getEquidistantPointByIndex(container.particles.count);
              break;
            case Enums_1.InlineArrangement.onePerPoint:
            case Enums_1.InlineArrangement.perPoint:
            default:
              position = this.getPointByIndex(container.particles.count);
          }
        } else {
          position = {
            x: Math.random() * container.canvas.size.width,
            y: Math.random() * container.canvas.size.height
          };
        }
        if (this.checkInsidePolygon(position)) {
          return position;
        } else {
          return this.randomPoint();
        }
      }
      getRandomPoint() {
        if (!this.raw || !this.raw.length) {
          throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const coords = (0, Utils_1.itemFromArray)(this.raw);
        return {
          x: coords.x,
          y: coords.y
        };
      }
      getRandomPointByLength() {
        var _a, _b, _c;
        const options = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
          throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const path = (0, Utils_1.itemFromArray)(this.paths);
        const distance = Math.floor(Math.random() * path.length) + 1;
        const point = path.element.getPointAtLength(distance);
        return {
          x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
          y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0)
        };
      }
      getEquidistantPointByIndex(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        const options = this.container.actualOptions;
        const polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
          throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        let offset = 0;
        let point;
        const totalLength = this.paths.reduce((tot, path) => tot + path.length, 0);
        const distance = totalLength / options.particles.number.value;
        for (const path of this.paths) {
          const pathDistance = distance * index - offset;
          if (pathDistance <= path.length) {
            point = path.element.getPointAtLength(pathDistance);
            break;
          } else {
            offset += path.length;
          }
        }
        return {
          x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
          y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0)
        };
      }
      getPointByIndex(index) {
        if (!this.raw || !this.raw.length) {
          throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const coords = this.raw[index % this.raw.length];
        return {
          x: coords.x,
          y: coords.y
        };
      }
      createPath2D() {
        var _a, _b;
        const options = this.options;
        if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
          return;
        }
        for (const path of this.paths) {
          const pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
          if (pathData) {
            const path2d = new Path2D(pathData);
            const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
            const finalPath = new Path2D();
            const transform = matrix.scale(options.scale);
            if (finalPath.addPath) {
              finalPath.addPath(path2d, transform);
              path.path2d = finalPath;
            } else {
              delete path.path2d;
            }
          } else {
            delete path.path2d;
          }
          if (path.path2d || !this.raw) {
            continue;
          }
          path.path2d = new Path2D();
          path.path2d.moveTo(this.raw[0].x, this.raw[0].y);
          this.raw.forEach((pos, i) => {
            var _a2;
            if (i > 0) {
              (_a2 = path.path2d) === null || _a2 === void 0 ? void 0 : _a2.lineTo(pos.x, pos.y);
            }
          });
          path.path2d.closePath();
        }
      }
      async initRawData(force) {
        const options = this.options;
        if (options.url) {
          this.raw = await this.downloadSvgPath(options.url, force);
        } else if (options.data) {
          const data = options.data;
          let svg;
          if (typeof data !== "string") {
            const path = data.path instanceof Array ? data.path.map((t) => `<path d="${t}" />`).join("") : `<path d="${data.path}" />`;
            const namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
            svg = `<svg ${namespaces} width="${data.size.width}" height="${data.size.height}">${path}</svg>`;
          } else {
            svg = data;
          }
          this.raw = this.parseSvgPath(svg, force);
        }
        this.createPath2D();
      }
    };
    exports.PolygonMaskInstance = PolygonMaskInstance;
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/pathseg.js
var require_pathseg = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/pathseg.js"() {
    "use strict";
    init_react();
    (function() {
      "use strict";
      try {
        if (typeof window === "undefined")
          return;
        if (!("SVGPathSeg" in window)) {
          window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
          };
          window.SVGPathSeg.prototype.classname = "SVGPathSeg";
          window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
          window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
          window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
          window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
          window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
          window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
          window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
          window.SVGPathSeg.PATHSEG_ARC_REL = 11;
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
          window.SVGPathSeg.prototype._segmentChanged = function() {
            if (this._owningPathSegList)
              this._owningPathSegList.segmentChanged(this);
          };
          window.SVGPathSegClosePath = function(owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
          };
          window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegClosePath.prototype.toString = function() {
            return "[object SVGPathSegClosePath]";
          };
          window.SVGPathSegClosePath.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter;
          };
          window.SVGPathSegClosePath.prototype.clone = function() {
            return new window.SVGPathSegClosePath(void 0);
          };
          window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
          };
          window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegMovetoAbs.prototype.toString = function() {
            return "[object SVGPathSegMovetoAbs]";
          };
          window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };
          window.SVGPathSegMovetoAbs.prototype.clone = function() {
            return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
          };
          Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
          };
          window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegMovetoRel.prototype.toString = function() {
            return "[object SVGPathSegMovetoRel]";
          };
          window.SVGPathSegMovetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };
          window.SVGPathSegMovetoRel.prototype.clone = function() {
            return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
          };
          Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
          };
          window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoAbs]";
          };
          window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };
          window.SVGPathSegLinetoAbs.prototype.clone = function() {
            return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
          };
          Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
          };
          window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoRel]";
          };
          window.SVGPathSegLinetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };
          window.SVGPathSegLinetoRel.prototype.clone = function() {
            return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
          };
          Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
          };
          window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicAbs]";
          };
          window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
            return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
          };
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
            get: function() {
              return this._x1;
            },
            set: function(x1) {
              this._x1 = x1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
            get: function() {
              return this._y1;
            },
            set: function(y1) {
              this._y1 = y1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
            get: function() {
              return this._x2;
            },
            set: function(x2) {
              this._x2 = x2;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
            get: function() {
              return this._y2;
            },
            set: function(y2) {
              this._y2 = y2;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
          };
          window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicRel]";
          };
          window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
            return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
          };
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
            get: function() {
              return this._x1;
            },
            set: function(x1) {
              this._x1 = x1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
            get: function() {
              return this._y1;
            },
            set: function(y1) {
              this._y1 = y1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
            get: function() {
              return this._x2;
            },
            set: function(x2) {
              this._x2 = x2;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
            get: function() {
              return this._y2;
            },
            set: function(y2) {
              this._y2 = y2;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
          };
          window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticAbs]";
          };
          window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1);
          };
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
            get: function() {
              return this._x1;
            },
            set: function(x1) {
              this._x1 = x1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
            get: function() {
              return this._y1;
            },
            set: function(y1) {
              this._y1 = y1;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
          };
          window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticRel]";
          };
          window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
            return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1);
          };
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
            get: function() {
              return this._x1;
            },
            set: function(x1) {
              this._x1 = x1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
            get: function() {
              return this._y1;
            },
            set: function(y1) {
              this._y1 = y1;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
          };
          window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegArcAbs.prototype.toString = function() {
            return "[object SVGPathSegArcAbs]";
          };
          window.SVGPathSegArcAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
          };
          window.SVGPathSegArcAbs.prototype.clone = function() {
            return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
          };
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
            get: function() {
              return this._r1;
            },
            set: function(r1) {
              this._r1 = r1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
            get: function() {
              return this._r2;
            },
            set: function(r2) {
              this._r2 = r2;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
            get: function() {
              return this._angle;
            },
            set: function(angle) {
              this._angle = angle;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
            get: function() {
              return this._largeArcFlag;
            },
            set: function(largeArcFlag) {
              this._largeArcFlag = largeArcFlag;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
            get: function() {
              return this._sweepFlag;
            },
            set: function(sweepFlag) {
              this._sweepFlag = sweepFlag;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
          };
          window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegArcRel.prototype.toString = function() {
            return "[object SVGPathSegArcRel]";
          };
          window.SVGPathSegArcRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
          };
          window.SVGPathSegArcRel.prototype.clone = function() {
            return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
          };
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
            get: function() {
              return this._r1;
            },
            set: function(r1) {
              this._r1 = r1;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
            get: function() {
              return this._r2;
            },
            set: function(r2) {
              this._r2 = r2;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
            get: function() {
              return this._angle;
            },
            set: function(angle) {
              this._angle = angle;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
            get: function() {
              return this._largeArcFlag;
            },
            set: function(largeArcFlag) {
              this._largeArcFlag = largeArcFlag;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
            get: function() {
              return this._sweepFlag;
            },
            set: function(sweepFlag) {
              this._sweepFlag = sweepFlag;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
          };
          window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalAbs]";
          };
          window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x;
          };
          window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
          };
          Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
          };
          window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalRel]";
          };
          window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x;
          };
          window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
          };
          Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
          };
          window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalAbs]";
          };
          window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y;
          };
          window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
          };
          Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
          };
          window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalRel]";
          };
          window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y;
          };
          window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
            return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
          };
          Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
          };
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
          };
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2);
          };
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
            get: function() {
              return this._x2;
            },
            set: function(x2) {
              this._x2 = x2;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
            get: function() {
              return this._y2;
            },
            set: function(y2) {
              this._y2 = y2;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
          };
          window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothRel]";
          };
          window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2);
          };
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
            get: function() {
              return this._x2;
            },
            set: function(x2) {
              this._x2 = x2;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
            get: function() {
              return this._y2;
            },
            set: function(y2) {
              this._y2 = y2;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
          };
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
          };
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y);
          };
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
          };
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
          };
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
          };
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y);
          };
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
            get: function() {
              return this._x;
            },
            set: function(x) {
              this._x = x;
              this._segmentChanged();
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
            get: function() {
              return this._y;
            },
            set: function(y) {
              this._y = y;
              this._segmentChanged();
            },
            enumerable: true
          });
          window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
            return new window.SVGPathSegClosePath(void 0);
          };
          window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) {
            return new window.SVGPathSegMovetoAbs(void 0, x, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) {
            return new window.SVGPathSegMovetoRel(void 0, x, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) {
            return new window.SVGPathSegLinetoAbs(void 0, x, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) {
            return new window.SVGPathSegLinetoRel(void 0, x, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicAbs(void 0, x, y, x1, y1, x2, y2);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicRel(void 0, x, y, x1, y1, x2, y2);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, x, y, x1, y1);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticRel(void 0, x, y, x1, y1);
          };
          window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcAbs(void 0, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
          };
          window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcRel(void 0, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
          };
          window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, x);
          };
          window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, x);
          };
          window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) {
            return new window.SVGPathSegLinetoVerticalRel(void 0, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, x, y, x2, y2);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, x, y, x2, y2);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, x, y);
          };
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, x, y);
          };
          if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
              if (distance === void 0 || !isFinite(distance))
                throw "Invalid arguments.";
              var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
              measurementElement.setAttribute("d", this.getAttribute("d"));
              var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;
              if (lastPathSegment <= 0)
                return 0;
              do {
                measurementElement.pathSegList.removeItem(lastPathSegment);
                if (distance > measurementElement.getTotalLength())
                  break;
                lastPathSegment--;
              } while (lastPathSegment > 0);
              return lastPathSegment;
            };
          }
        }
        if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
          window.SVGPathSegList = function(pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));
            this._mutationObserverConfig = { attributes: true, attributeFilter: ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          };
          window.SVGPathSegList.prototype.classname = "SVGPathSegList";
          Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
              this._checkPathSynchronizedToList();
              return this._list.length;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathSegList.prototype, "length", {
            get: function() {
              this._checkPathSynchronizedToList();
              return this._list.length;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function() {
              if (!this._pathSegList)
                this._pathSegList = new window.SVGPathSegList(this);
              return this._pathSegList;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
            get: function() {
              return this.pathSegList;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
            get: function() {
              return this.pathSegList;
            },
            enumerable: true
          });
          Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
            get: function() {
              return this.pathSegList;
            },
            enumerable: true
          });
          window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
          };
          window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
            if (!this._pathElement)
              return;
            var hasPathMutations = false;
            mutationRecords.forEach(function(record) {
              if (record.attributeName == "d")
                hasPathMutations = true;
            });
            if (hasPathMutations)
              this._list = this._parsePath(this._pathElement.getAttribute("d"));
          };
          window.SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          };
          window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
            this._writeListToPath();
          };
          window.SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();
            this._list.forEach(function(pathSeg) {
              pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
          };
          window.SVGPathSegList.prototype.initialize = function(newItem) {
            this._checkPathSynchronizedToList();
            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
          };
          window.SVGPathSegList.prototype._checkValidIndex = function(index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems)
              throw "INDEX_SIZE_ERR";
          };
          window.SVGPathSegList.prototype.getItem = function(index) {
            this._checkPathSynchronizedToList();
            this._checkValidIndex(index);
            return this._list[index];
          };
          window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
            this._checkPathSynchronizedToList();
            if (index > this.numberOfItems)
              index = this.numberOfItems;
            if (newItem._owningPathSegList) {
              newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
          };
          window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
            this._checkPathSynchronizedToList();
            if (newItem._owningPathSegList) {
              newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
          };
          window.SVGPathSegList.prototype.removeItem = function(index) {
            this._checkPathSynchronizedToList();
            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
          };
          window.SVGPathSegList.prototype.appendItem = function(newItem) {
            this._checkPathSynchronizedToList();
            if (newItem._owningPathSegList) {
              newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
          };
          window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function(pathSeg) {
              if (first) {
                first = false;
                string += pathSeg._asPathString();
              } else {
                string += " " + pathSeg._asPathString();
              }
            });
            return string;
          };
          window.SVGPathSegList.prototype._parsePath = function(string) {
            if (!string || string.length == 0)
              return [];
            var owningPathSegList = this;
            var Builder = function() {
              this.pathSegList = [];
            };
            Builder.prototype.appendSegment = function(pathSeg2) {
              this.pathSegList.push(pathSeg2);
            };
            var Source = function(string2) {
              this._string = string2;
              this._currentIndex = 0;
              this._endIndex = this._string.length;
              this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;
              this._skipOptionalSpaces();
            };
            Source.prototype._isCurrentSpace = function() {
              var character = this._string[this._currentIndex];
              return character <= " " && (character == " " || character == "\n" || character == "	" || character == "\r" || character == "\f");
            };
            Source.prototype._skipOptionalSpaces = function() {
              while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                this._currentIndex++;
              return this._currentIndex < this._endIndex;
            };
            Source.prototype._skipOptionalSpacesOrDelimiter = function() {
              if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                return false;
              if (this._skipOptionalSpaces()) {
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                  this._currentIndex++;
                  this._skipOptionalSpaces();
                }
              }
              return this._currentIndex < this._endIndex;
            };
            Source.prototype.hasMoreData = function() {
              return this._currentIndex < this._endIndex;
            };
            Source.prototype.peekSegmentType = function() {
              var lookahead = this._string[this._currentIndex];
              return this._pathSegTypeFromChar(lookahead);
            };
            Source.prototype._pathSegTypeFromChar = function(lookahead) {
              switch (lookahead) {
                case "Z":
                case "z":
                  return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                  return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                  return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                  return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                  return window.SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                  return window.SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                  return window.SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                  return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                  return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                  return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                  return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                  return window.SVGPathSeg.PATHSEG_UNKNOWN;
              }
            };
            Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
              if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
                  return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
                  return window.SVGPathSeg.PATHSEG_LINETO_REL;
                return previousCommand;
              }
              return window.SVGPathSeg.PATHSEG_UNKNOWN;
            };
            Source.prototype.initialCommandIsMoveTo = function() {
              if (!this.hasMoreData())
                return true;
              var command = this.peekSegmentType();
              return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            };
            Source.prototype._parseNumber = function() {
              var exponent = 0;
              var integer = 0;
              var frac = 1;
              var decimal = 0;
              var sign = 1;
              var expsign = 1;
              var startIndex = this._currentIndex;
              this._skipOptionalSpaces();
              if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                this._currentIndex++;
              else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                this._currentIndex++;
                sign = -1;
              }
              if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".")
                return void 0;
              var startIntPartIndex = this._currentIndex;
              while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                this._currentIndex++;
              if (this._currentIndex != startIntPartIndex) {
                var scanIntPartIndex = this._currentIndex - 1;
                var multiplier = 1;
                while (scanIntPartIndex >= startIntPartIndex) {
                  integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                  multiplier *= 10;
                }
              }
              if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                this._currentIndex++;
                if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                  return void 0;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                  frac *= 10;
                  decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                  this._currentIndex += 1;
                }
              }
              if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                this._currentIndex++;
                if (this._string.charAt(this._currentIndex) == "+") {
                  this._currentIndex++;
                } else if (this._string.charAt(this._currentIndex) == "-") {
                  this._currentIndex++;
                  expsign = -1;
                }
                if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                  return void 0;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                  exponent *= 10;
                  exponent += this._string.charAt(this._currentIndex) - "0";
                  this._currentIndex++;
                }
              }
              var number = integer + decimal;
              number *= sign;
              if (exponent)
                number *= Math.pow(10, expsign * exponent);
              if (startIndex == this._currentIndex)
                return void 0;
              this._skipOptionalSpacesOrDelimiter();
              return number;
            };
            Source.prototype._parseArcFlag = function() {
              if (this._currentIndex >= this._endIndex)
                return void 0;
              var flag = false;
              var flagChar = this._string.charAt(this._currentIndex++);
              if (flagChar == "0")
                flag = false;
              else if (flagChar == "1")
                flag = true;
              else
                return void 0;
              this._skipOptionalSpacesOrDelimiter();
              return flag;
            };
            Source.prototype.parseSegment = function() {
              var lookahead = this._string[this._currentIndex];
              var command = this._pathSegTypeFromChar(lookahead);
              if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                  return null;
                command = this._nextCommandHelper(lookahead, this._previousCommand);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
                  return null;
              } else {
                this._currentIndex++;
              }
              this._previousCommand = command;
              switch (command) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                  return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                  return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                  return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                  return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                  return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                  return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                  return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                  return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                  this._skipOptionalSpaces();
                  return new window.SVGPathSegClosePath(owningPathSegList);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                  var points = {
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                  var points = {
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                  return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                  return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_ARC_REL:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    arcAngle: this._parseNumber(),
                    arcLarge: this._parseArcFlag(),
                    arcSweep: this._parseArcFlag(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                  var points = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    arcAngle: this._parseNumber(),
                    arcLarge: this._parseArcFlag(),
                    arcSweep: this._parseArcFlag(),
                    x: this._parseNumber(),
                    y: this._parseNumber()
                  };
                  return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                default:
                  throw "Unknown path seg type.";
              }
            };
            var builder = new Builder();
            var source = new Source(string);
            if (!source.initialCommandIsMoveTo())
              return [];
            while (source.hasMoreData()) {
              var pathSeg = source.parseSegment();
              if (!pathSeg)
                return [];
              builder.appendSegment(pathSeg);
            }
            return builder.pathSegList;
          };
        }
      } catch (e) {
        console.warn("An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles", e);
      }
    })();
  }
});

// node_modules/tsparticles/Plugins/PolygonMask/plugin.js
var require_plugin3 = __commonJS({
  "node_modules/tsparticles/Plugins/PolygonMask/plugin.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadPolygonMaskPlugin = void 0;
    var PolygonMaskInstance_1 = require_PolygonMaskInstance();
    var PolygonMask_1 = require_PolygonMask();
    var Enums_1 = require_Enums4();
    var Utils_1 = require_Utils2();
    var Plugin = class {
      constructor() {
        this.id = "polygonMask";
      }
      getPlugin(container) {
        return new PolygonMaskInstance_1.PolygonMaskInstance(container);
      }
      needsPlugin(options) {
        var _a, _b, _c;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : ((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== void 0 && options.polygon.type !== Enums_1.Type.none;
      }
      loadOptions(options, source) {
        if (!this.needsPlugin(source)) {
          return;
        }
        const optionsCast = options;
        let polygonOptions = optionsCast.polygon;
        if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === void 0) {
          optionsCast.polygon = polygonOptions = new PolygonMask_1.PolygonMask();
        }
        polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
      }
    };
    async function loadPolygonMaskPlugin(tsParticles) {
      if (!(0, Utils_1.isSsr)() && !window.SVGPathSeg) {
        await Promise.resolve().then(() => __importStar(require_pathseg()));
      }
      const plugin = new Plugin();
      tsParticles.addPlugin(plugin);
    }
    exports.loadPolygonMaskPlugin = loadPolygonMaskPlugin;
  }
});

// node_modules/tsparticles/Shapes/Circle/CircleDrawer.js
var require_CircleDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Circle/CircleDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CircleDrawer = void 0;
    var CircleDrawer = class {
      getSidesCount() {
        return 12;
      }
      draw(context, particle, radius) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
      }
    };
    exports.CircleDrawer = CircleDrawer;
  }
});

// node_modules/tsparticles/Shapes/Circle/index.js
var require_Circle2 = __commonJS({
  "node_modules/tsparticles/Shapes/Circle/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadCircleShape = void 0;
    var CircleDrawer_1 = require_CircleDrawer();
    function loadCircleShape(tsParticles) {
      tsParticles.addShape("circle", new CircleDrawer_1.CircleDrawer());
    }
    exports.loadCircleShape = loadCircleShape;
  }
});

// node_modules/tsparticles/Shapes/Image/Utils.js
var require_Utils3 = __commonJS({
  "node_modules/tsparticles/Shapes/Image/Utils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.replaceColorSvg = exports.downloadSvgImage = exports.loadImage = void 0;
    var Utils_1 = require_Utils2();
    function loadImage(source) {
      return new Promise((resolve, reject) => {
        if (!source) {
          reject("Error tsParticles - No image.src");
          return;
        }
        const image = {
          source,
          type: source.substr(source.length - 3)
        };
        const img = new Image();
        img.addEventListener("load", () => {
          image.element = img;
          resolve(image);
        });
        img.addEventListener("error", () => {
          reject(`Error tsParticles - loading image: ${source}`);
        });
        img.src = source;
      });
    }
    exports.loadImage = loadImage;
    async function downloadSvgImage(source) {
      if (!source) {
        throw new Error("Error tsParticles - No image.src");
      }
      const image = {
        source,
        type: source.substr(source.length - 3)
      };
      if (image.type !== "svg") {
        return loadImage(source);
      }
      const response = await fetch(image.source);
      if (!response.ok) {
        throw new Error("Error tsParticles - Image not found");
      }
      image.svgData = await response.text();
      return image;
    }
    exports.downloadSvgImage = downloadSvgImage;
    function replaceColorSvg(imageShape, color, opacity) {
      const { svgData } = imageShape;
      if (!svgData) {
        return "";
      }
      if (svgData.includes("fill")) {
        const currentColor = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        return svgData.replace(currentColor, () => (0, Utils_1.getStyleFromHsl)(color, opacity));
      }
      const preFillIndex = svgData.indexOf(">");
      return `${svgData.substring(0, preFillIndex)} fill="${(0, Utils_1.getStyleFromHsl)(color, opacity)}"${svgData.substring(preFillIndex)}`;
    }
    exports.replaceColorSvg = replaceColorSvg;
  }
});

// node_modules/tsparticles/Shapes/Image/ImageDrawer.js
var require_ImageDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Image/ImageDrawer.js"(exports) {
    "use strict";
    init_react();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ImageDrawer_images;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageDrawer = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var Utils_2 = require_Utils3();
    var ImageDrawer = class {
      constructor() {
        _ImageDrawer_images.set(this, void 0);
        __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
      }
      getSidesCount() {
        return 12;
      }
      getImages(container) {
        const containerImages = __classPrivateFieldGet(this, _ImageDrawer_images, "f").find((t) => t.id === container.id);
        if (!containerImages) {
          __classPrivateFieldGet(this, _ImageDrawer_images, "f").push({
            id: container.id,
            images: []
          });
          return this.getImages(container);
        } else {
          return containerImages;
        }
      }
      addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
      }
      async init(container) {
        await this.loadImagesFromParticlesOptions(container, container.actualOptions.particles);
        await this.loadImagesFromParticlesOptions(container, container.actualOptions.interactivity.modes.trail.particles);
        for (const manualParticle of container.actualOptions.manualParticles) {
          await this.loadImagesFromParticlesOptions(container, manualParticle.options);
        }
        const emitterOptions = container.actualOptions;
        if (emitterOptions.emitters) {
          if (emitterOptions.emitters instanceof Array) {
            for (const emitter of emitterOptions.emitters) {
              await this.loadImagesFromParticlesOptions(container, emitter.particles);
            }
          } else {
            await this.loadImagesFromParticlesOptions(container, emitterOptions.emitters.particles);
          }
        }
        const interactiveEmitters = emitterOptions.interactivity.modes.emitters;
        if (interactiveEmitters) {
          if (interactiveEmitters instanceof Array) {
            for (const emitter of interactiveEmitters) {
              await this.loadImagesFromParticlesOptions(container, emitter.particles);
            }
          } else {
            await this.loadImagesFromParticlesOptions(container, interactiveEmitters.particles);
          }
        }
      }
      destroy() {
        __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
      }
      async loadImagesFromParticlesOptions(container, options) {
        var _a, _b, _c;
        const shapeOptions = options === null || options === void 0 ? void 0 : options.shape;
        if (!(shapeOptions === null || shapeOptions === void 0 ? void 0 : shapeOptions.type) || !shapeOptions.options || !(0, Utils_1.isInArray)(Enums_1.ShapeType.image, shapeOptions.type) && !(0, Utils_1.isInArray)(Enums_1.ShapeType.images, shapeOptions.type)) {
          return;
        }
        const idx = __classPrivateFieldGet(this, _ImageDrawer_images, "f").findIndex((t) => t.id === container.id);
        if (idx >= 0) {
          __classPrivateFieldGet(this, _ImageDrawer_images, "f").splice(idx, 1);
        }
        const imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];
        if (imageOptions instanceof Array) {
          for (const optionsImage of imageOptions) {
            await this.loadImageShape(container, optionsImage);
          }
        } else {
          await this.loadImageShape(container, imageOptions);
        }
        if (options === null || options === void 0 ? void 0 : options.groups) {
          for (const groupName in options.groups) {
            const group = options.groups[groupName];
            await this.loadImagesFromParticlesOptions(container, group);
          }
        }
        if ((_c = (_b = options === null || options === void 0 ? void 0 : options.destroy) === null || _b === void 0 ? void 0 : _b.split) === null || _c === void 0 ? void 0 : _c.particles) {
          await this.loadImagesFromParticlesOptions(container, options === null || options === void 0 ? void 0 : options.destroy.split.particles);
        }
      }
      async loadImageShape(container, imageShape) {
        try {
          const imageFunc = imageShape.replaceColor ? Utils_2.downloadSvgImage : Utils_2.loadImage;
          const image = await imageFunc(imageShape.src);
          if (image) {
            this.addImage(container, image);
          }
        } catch (_a) {
          console.warn(`tsParticles error - ${imageShape.src} not found`);
        }
      }
      draw(context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
          return;
        }
        const image = particle.image;
        const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
          return;
        }
        const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        const pos = {
          x: -radius,
          y: -radius
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
          context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
          context.globalAlpha = 1;
        }
      }
      loadShape(particle) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (particle.shape !== "image" && particle.shape !== "images") {
          return;
        }
        const images = this.getImages(particle.container).images;
        const imageData = particle.shapeData;
        const image = (_a = images.find((t) => t.source === imageData.src)) !== null && _a !== void 0 ? _a : images[0];
        const color = particle.getFillColor();
        let imageRes;
        if (!image) {
          return;
        }
        if (image.svgData !== void 0 && imageData.replaceColor && color) {
          const svgColoredData = (0, Utils_2.replaceColorSvg)(image, color, (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1);
          const svg = new Blob([svgColoredData], { type: "image/svg+xml" });
          const domUrl = URL || window.URL || window.webkitURL || window;
          const url = domUrl.createObjectURL(svg);
          const img = new Image();
          imageRes = {
            data: Object.assign(Object.assign({}, image), { svgData: svgColoredData }),
            ratio: imageData.width / imageData.height,
            replaceColor: (_d = imageData.replaceColor) !== null && _d !== void 0 ? _d : imageData.replace_color,
            source: imageData.src
          };
          img.addEventListener("load", () => {
            const pImage = particle.image;
            if (pImage) {
              pImage.loaded = true;
              image.element = img;
            }
            domUrl.revokeObjectURL(url);
          });
          img.addEventListener("error", () => {
            domUrl.revokeObjectURL(url);
            (0, Utils_2.loadImage)(imageData.src).then((img2) => {
              const pImage = particle.image;
              if (pImage) {
                image.element = img2 === null || img2 === void 0 ? void 0 : img2.element;
                pImage.loaded = true;
              }
            });
          });
          img.src = url;
        } else {
          imageRes = {
            data: image,
            loaded: true,
            ratio: imageData.width / imageData.height,
            replaceColor: (_e = imageData.replaceColor) !== null && _e !== void 0 ? _e : imageData.replace_color,
            source: imageData.src
          };
        }
        if (!imageRes.ratio) {
          imageRes.ratio = 1;
        }
        const fill = (_f = imageData.fill) !== null && _f !== void 0 ? _f : particle.fill;
        const close = (_g = imageData.close) !== null && _g !== void 0 ? _g : particle.close;
        const imageShape = {
          image: imageRes,
          fill,
          close
        };
        particle.image = imageShape.image;
        particle.fill = imageShape.fill;
        particle.close = imageShape.close;
      }
    };
    exports.ImageDrawer = ImageDrawer;
    _ImageDrawer_images = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/tsparticles/Shapes/Image/index.js
var require_Image = __commonJS({
  "node_modules/tsparticles/Shapes/Image/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadImageShape = void 0;
    var ImageDrawer_1 = require_ImageDrawer();
    function loadImageShape(tsParticles) {
      const imageDrawer = new ImageDrawer_1.ImageDrawer();
      tsParticles.addShape("image", imageDrawer);
      tsParticles.addShape("images", imageDrawer);
    }
    exports.loadImageShape = loadImageShape;
  }
});

// node_modules/tsparticles/Shapes/Line/LineDrawer.js
var require_LineDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Line/LineDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LineDrawer = void 0;
    var LineDrawer = class {
      getSidesCount() {
        return 1;
      }
      draw(context, particle, radius) {
        context.moveTo(-radius / 2, 0);
        context.lineTo(radius / 2, 0);
      }
    };
    exports.LineDrawer = LineDrawer;
  }
});

// node_modules/tsparticles/Shapes/Line/index.js
var require_Line = __commonJS({
  "node_modules/tsparticles/Shapes/Line/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadLineShape = void 0;
    var LineDrawer_1 = require_LineDrawer();
    function loadLineShape(tsParticles) {
      tsParticles.addShape("line", new LineDrawer_1.LineDrawer());
    }
    exports.loadLineShape = loadLineShape;
  }
});

// node_modules/tsparticles/Shapes/Polygon/PolygonDrawerBase.js
var require_PolygonDrawerBase = __commonJS({
  "node_modules/tsparticles/Shapes/Polygon/PolygonDrawerBase.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PolygonDrawerBase = void 0;
    var PolygonDrawerBase = class {
      getSidesCount(particle) {
        var _a, _b;
        const polygon = particle.shapeData;
        return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
      }
      draw(context, particle, radius) {
        const start = this.getCenter(particle, radius);
        const side = this.getSidesData(particle, radius);
        const sideCount = side.count.numerator * side.count.denominator;
        const decimalSides = side.count.numerator / side.count.denominator;
        const interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
        const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) {
          return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (let i = 0; i < sideCount; i++) {
          context.lineTo(side.length, 0);
          context.translate(side.length, 0);
          context.rotate(interiorAngle);
        }
      }
    };
    exports.PolygonDrawerBase = PolygonDrawerBase;
  }
});

// node_modules/tsparticles/Shapes/Polygon/PolygonDrawer.js
var require_PolygonDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Polygon/PolygonDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PolygonDrawer = void 0;
    var PolygonDrawerBase_1 = require_PolygonDrawerBase();
    var PolygonDrawer = class extends PolygonDrawerBase_1.PolygonDrawerBase {
      getSidesData(particle, radius) {
        var _a, _b;
        const polygon = particle.shapeData;
        const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
          count: {
            denominator: 1,
            numerator: sides
          },
          length: radius * 2.66 / (sides / 3)
        };
      }
      getCenter(particle, radius) {
        const sides = this.getSidesCount(particle);
        return {
          x: -radius / (sides / 3.5),
          y: -radius / (2.66 / 3.5)
        };
      }
    };
    exports.PolygonDrawer = PolygonDrawer;
  }
});

// node_modules/tsparticles/Shapes/Polygon/TriangleDrawer.js
var require_TriangleDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Polygon/TriangleDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TriangleDrawer = void 0;
    var PolygonDrawerBase_1 = require_PolygonDrawerBase();
    var TriangleDrawer = class extends PolygonDrawerBase_1.PolygonDrawerBase {
      getSidesCount() {
        return 3;
      }
      getSidesData(particle, radius) {
        return {
          count: {
            denominator: 2,
            numerator: 3
          },
          length: radius * 2
        };
      }
      getCenter(particle, radius) {
        return {
          x: -radius,
          y: radius / 1.66
        };
      }
    };
    exports.TriangleDrawer = TriangleDrawer;
  }
});

// node_modules/tsparticles/Shapes/Polygon/index.js
var require_Polygon = __commonJS({
  "node_modules/tsparticles/Shapes/Polygon/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadPolygonShape = exports.loadTriangleShape = exports.loadGenericPolygonShape = void 0;
    var PolygonDrawer_1 = require_PolygonDrawer();
    var TriangleDrawer_1 = require_TriangleDrawer();
    function loadGenericPolygonShape(tsParticles) {
      tsParticles.addShape("polygon", new PolygonDrawer_1.PolygonDrawer());
    }
    exports.loadGenericPolygonShape = loadGenericPolygonShape;
    function loadTriangleShape(tsParticles) {
      tsParticles.addShape("triangle", new TriangleDrawer_1.TriangleDrawer());
    }
    exports.loadTriangleShape = loadTriangleShape;
    function loadPolygonShape(tsParticles) {
      loadGenericPolygonShape(tsParticles);
      loadTriangleShape(tsParticles);
    }
    exports.loadPolygonShape = loadPolygonShape;
  }
});

// node_modules/tsparticles/Shapes/Square/SquareDrawer.js
var require_SquareDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Square/SquareDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SquareDrawer = void 0;
    var fixFactor = Math.sqrt(2);
    var SquareDrawer = class {
      getSidesCount() {
        return 4;
      }
      draw(context, particle, radius) {
        context.rect(-radius / fixFactor, -radius / fixFactor, radius * 2 / fixFactor, radius * 2 / fixFactor);
      }
    };
    exports.SquareDrawer = SquareDrawer;
  }
});

// node_modules/tsparticles/Shapes/Square/index.js
var require_Square = __commonJS({
  "node_modules/tsparticles/Shapes/Square/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSquareShape = void 0;
    var SquareDrawer_1 = require_SquareDrawer();
    function loadSquareShape(tsParticles) {
      const drawer = new SquareDrawer_1.SquareDrawer();
      tsParticles.addShape("edge", drawer);
      tsParticles.addShape("square", drawer);
    }
    exports.loadSquareShape = loadSquareShape;
  }
});

// node_modules/tsparticles/Shapes/Star/StarDrawer.js
var require_StarDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Star/StarDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StarDrawer = void 0;
    var StarDrawer = class {
      getSidesCount(particle) {
        var _a, _b;
        const star = particle.shapeData;
        return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
      }
      draw(context, particle, radius) {
        var _a;
        const star = particle.shapeData;
        const sides = this.getSidesCount(particle);
        const inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
          context.rotate(Math.PI / sides);
          context.lineTo(0, 0 - radius * inset);
          context.rotate(Math.PI / sides);
          context.lineTo(0, 0 - radius);
        }
      }
    };
    exports.StarDrawer = StarDrawer;
  }
});

// node_modules/tsparticles/Shapes/Star/index.js
var require_Star = __commonJS({
  "node_modules/tsparticles/Shapes/Star/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadStarShape = void 0;
    var StarDrawer_1 = require_StarDrawer();
    function loadStarShape(tsParticles) {
      tsParticles.addShape("star", new StarDrawer_1.StarDrawer());
    }
    exports.loadStarShape = loadStarShape;
  }
});

// node_modules/tsparticles/Shapes/Text/TextDrawer.js
var require_TextDrawer = __commonJS({
  "node_modules/tsparticles/Shapes/Text/TextDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDrawer = exports.validTypes = void 0;
    var Utils_1 = require_Utils2();
    exports.validTypes = ["text", "character", "char"];
    var TextDrawer = class {
      getSidesCount() {
        return 12;
      }
      async init(container) {
        const options = container.actualOptions;
        if (exports.validTypes.find((t) => (0, Utils_1.isInArray)(t, options.particles.shape.type))) {
          const shapeOptions = exports.validTypes.map((t) => options.particles.shape.options[t]).find((t) => !!t);
          if (shapeOptions instanceof Array) {
            const promises = [];
            for (const character of shapeOptions) {
              promises.push((0, Utils_1.loadFont)(character));
            }
            await Promise.allSettled(promises);
          } else {
            if (shapeOptions !== void 0) {
              await (0, Utils_1.loadFont)(shapeOptions);
            }
          }
        }
      }
      draw(context, particle, radius, opacity) {
        var _a, _b, _c;
        const character = particle.shapeData;
        if (character === void 0) {
          return;
        }
        const textData = character.value;
        if (textData === void 0) {
          return;
        }
        const textParticle = particle;
        if (textParticle.text === void 0) {
          textParticle.text = textData instanceof Array ? (0, Utils_1.itemFromArray)(textData, particle.randomIndexData) : textData;
        }
        const text = textParticle.text;
        const style = (_a = character.style) !== null && _a !== void 0 ? _a : "";
        const weight = (_b = character.weight) !== null && _b !== void 0 ? _b : "400";
        const size = Math.round(radius) * 2;
        const font = (_c = character.font) !== null && _c !== void 0 ? _c : "Verdana";
        const fill = particle.fill;
        const offsetX = text.length * radius / 2;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
          x: -offsetX,
          y: radius / 2
        };
        context.globalAlpha = opacity;
        if (fill) {
          context.fillText(text, pos.x, pos.y);
        } else {
          context.strokeText(text, pos.x, pos.y);
        }
        context.globalAlpha = 1;
      }
    };
    exports.TextDrawer = TextDrawer;
  }
});

// node_modules/tsparticles/Shapes/Text/index.js
var require_Text = __commonJS({
  "node_modules/tsparticles/Shapes/Text/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadTextShape = void 0;
    var TextDrawer_1 = require_TextDrawer();
    function loadTextShape(tsParticles) {
      const drawer = new TextDrawer_1.TextDrawer();
      for (const type of TextDrawer_1.validTypes) {
        tsParticles.addShape(type, drawer);
      }
    }
    exports.loadTextShape = loadTextShape;
  }
});

// node_modules/tsparticles/Updaters/Angle/AngleUpdater.js
var require_AngleUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Angle/AngleUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AngleUpdater = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    function updateAngle(particle, delta) {
      var _a;
      const rotate = particle.rotate;
      if (!rotate) {
        return;
      }
      const rotateOptions = particle.options.rotate;
      const rotateAnimation = rotateOptions.animation;
      const speed = ((_a = rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
      const max = 2 * Math.PI;
      if (!rotateAnimation.enable) {
        return;
      }
      switch (rotate.status) {
        case Enums_1.AnimationStatus.increasing:
          rotate.value += speed;
          if (rotate.value > max) {
            rotate.value -= max;
          }
          break;
        case Enums_1.AnimationStatus.decreasing:
        default:
          rotate.value -= speed;
          if (rotate.value < 0) {
            rotate.value += max;
          }
          break;
      }
    }
    var AngleUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const rotateOptions = particle.options.rotate;
        particle.rotate = {
          enable: rotateOptions.animation.enable,
          value: (0, Utils_1.getRangeValue)(rotateOptions.value) * Math.PI / 180
        };
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === Enums_1.RotateDirection.random) {
          const index = Math.floor(Math.random() * 2);
          rotateDirection = index > 0 ? Enums_1.RotateDirection.counterClockwise : Enums_1.RotateDirection.clockwise;
        }
        switch (rotateDirection) {
          case Enums_1.RotateDirection.counterClockwise:
          case "counterClockwise":
            particle.rotate.status = Enums_1.AnimationStatus.decreasing;
            break;
          case Enums_1.RotateDirection.clockwise:
            particle.rotate.status = Enums_1.AnimationStatus.increasing;
            break;
        }
        const rotateAnimation = particle.options.rotate.animation;
        if (rotateAnimation.enable) {
          particle.rotate.velocity = rotateAnimation.speed / 360 * this.container.retina.reduceFactor;
          if (!rotateAnimation.sync) {
            particle.rotate.velocity *= Math.random();
          }
        }
      }
      isEnabled(particle) {
        const rotate = particle.options.rotate;
        const rotateAnimation = rotate.animation;
        return !particle.destroyed && !particle.spawning && !rotate.path && rotateAnimation.enable;
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateAngle(particle, delta);
      }
    };
    exports.AngleUpdater = AngleUpdater;
  }
});

// node_modules/tsparticles/Updaters/Angle/index.js
var require_Angle = __commonJS({
  "node_modules/tsparticles/Updaters/Angle/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadAngleUpdater = void 0;
    var AngleUpdater_1 = require_AngleUpdater();
    function loadAngleUpdater(tsParticles) {
      tsParticles.addParticleUpdater("angle", (container) => new AngleUpdater_1.AngleUpdater(container));
    }
    exports.loadAngleUpdater = loadAngleUpdater;
  }
});

// node_modules/tsparticles/Updaters/Color/ColorUpdater.js
var require_ColorUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Color/ColorUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorUpdater = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    function updateColorValue(delta, value, valueAnimation, max, decrease) {
      var _a;
      const colorValue = value;
      if (!colorValue || !valueAnimation.enable) {
        return;
      }
      const offset = (0, Utils_1.randomInRange)(valueAnimation.offset);
      const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
      if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
        colorValue.value += velocity;
        if (decrease && colorValue.value > max) {
          colorValue.status = Enums_1.AnimationStatus.decreasing;
          colorValue.value -= colorValue.value % max;
        }
      } else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
          colorValue.status = Enums_1.AnimationStatus.increasing;
          colorValue.value += colorValue.value;
        }
      }
      if (colorValue.value > max) {
        colorValue.value %= max;
      }
    }
    function updateColor(particle, delta) {
      var _a, _b, _c;
      const animationOptions = particle.options.color.animation;
      if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== void 0) {
        updateColorValue(delta, particle.color.h, animationOptions.h, 360, false);
      }
      if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== void 0) {
        updateColorValue(delta, particle.color.s, animationOptions.s, 100, true);
      }
      if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== void 0) {
        updateColorValue(delta, particle.color.l, animationOptions.l, 100, true);
      }
    }
    var ColorUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const hslColor = (0, Utils_1.colorToHsl)(particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) {
          particle.color = (0, Utils_1.getHslAnimationFromHsl)(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
        }
      }
      isEnabled(particle) {
        var _a, _b, _c;
        const animationOptions = particle.options.color.animation;
        return !particle.destroyed && !particle.spawning && (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h.value) !== void 0 && animationOptions.h.enable || ((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s.value) !== void 0 && animationOptions.s.enable || ((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l.value) !== void 0 && animationOptions.l.enable);
      }
      update(particle, delta) {
        updateColor(particle, delta);
      }
    };
    exports.ColorUpdater = ColorUpdater;
  }
});

// node_modules/tsparticles/Updaters/Color/index.js
var require_Color = __commonJS({
  "node_modules/tsparticles/Updaters/Color/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadColorUpdater = void 0;
    var ColorUpdater_1 = require_ColorUpdater();
    function loadColorUpdater(tsParticles) {
      tsParticles.addParticleUpdater("color", (container) => new ColorUpdater_1.ColorUpdater(container));
    }
    exports.loadColorUpdater = loadColorUpdater;
  }
});

// node_modules/tsparticles/Updaters/Life/LifeUpdater.js
var require_LifeUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Life/LifeUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LifeUpdater = void 0;
    var Utils_1 = require_Utils2();
    var LifeUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init() {
      }
      isEnabled(particle) {
        return !particle.destroyed;
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        const life = particle.life;
        let justSpawned = false;
        if (particle.spawning) {
          life.delayTime += delta.value;
          if (life.delayTime >= particle.life.delay) {
            justSpawned = true;
            particle.spawning = false;
            life.delayTime = 0;
            life.time = 0;
          } else {
            return;
          }
        }
        if (life.duration === -1) {
          return;
        }
        if (particle.spawning) {
          return;
        }
        if (justSpawned) {
          life.time = 0;
        } else {
          life.time += delta.value;
        }
        if (life.time < life.duration) {
          return;
        }
        life.time = 0;
        if (particle.life.count > 0) {
          particle.life.count--;
        }
        if (particle.life.count === 0) {
          particle.destroy();
          return;
        }
        const canvasSize = this.container.canvas.size, widthRange = (0, Utils_1.setRangeValue)(0, canvasSize.width), heightRange = (0, Utils_1.setRangeValue)(0, canvasSize.width);
        particle.position.x = (0, Utils_1.randomInRange)(widthRange);
        particle.position.y = (0, Utils_1.randomInRange)(heightRange);
        particle.spawning = true;
        life.delayTime = 0;
        life.time = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        life.delay = (0, Utils_1.getRangeValue)(lifeOptions.delay.value) * 1e3;
        life.duration = (0, Utils_1.getRangeValue)(lifeOptions.duration.value) * 1e3;
      }
    };
    exports.LifeUpdater = LifeUpdater;
  }
});

// node_modules/tsparticles/Updaters/Life/index.js
var require_Life2 = __commonJS({
  "node_modules/tsparticles/Updaters/Life/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadLifeUpdater = void 0;
    var LifeUpdater_1 = require_LifeUpdater();
    function loadLifeUpdater(tsParticles) {
      tsParticles.addParticleUpdater("life", (container) => new LifeUpdater_1.LifeUpdater(container));
    }
    exports.loadLifeUpdater = loadLifeUpdater;
  }
});

// node_modules/tsparticles/Updaters/Opacity/OpacityUpdater.js
var require_OpacityUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Opacity/OpacityUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpacityUpdater = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    function checkDestroy(particle, value, minValue, maxValue) {
      switch (particle.options.opacity.animation.destroy) {
        case Enums_1.DestroyType.max:
          if (value >= maxValue) {
            particle.destroy();
          }
          break;
        case Enums_1.DestroyType.min:
          if (value <= minValue) {
            particle.destroy();
          }
          break;
      }
    }
    function updateOpacity(particle, delta) {
      var _a, _b, _c, _d, _e;
      if (!particle.opacity) {
        return;
      }
      const minValue = particle.opacity.min;
      const maxValue = particle.opacity.max;
      if (!(!particle.destroyed && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0)))) {
        return;
      }
      switch (particle.opacity.status) {
        case Enums_1.AnimationStatus.increasing:
          if (particle.opacity.value >= maxValue) {
            particle.opacity.status = Enums_1.AnimationStatus.decreasing;
            if (!particle.opacity.loops) {
              particle.opacity.loops = 0;
            }
            particle.opacity.loops++;
          } else {
            particle.opacity.value += ((_d = particle.opacity.velocity) !== null && _d !== void 0 ? _d : 0) * delta.factor;
          }
          break;
        case Enums_1.AnimationStatus.decreasing:
          if (particle.opacity.value <= minValue) {
            particle.opacity.status = Enums_1.AnimationStatus.increasing;
            if (!particle.opacity.loops) {
              particle.opacity.loops = 0;
            }
            particle.opacity.loops++;
          } else {
            particle.opacity.value -= ((_e = particle.opacity.velocity) !== null && _e !== void 0 ? _e : 0) * delta.factor;
          }
          break;
      }
      checkDestroy(particle, particle.opacity.value, minValue, maxValue);
      if (!particle.destroyed) {
        particle.opacity.value = (0, Utils_1.clamp)(particle.opacity.value, minValue, maxValue);
      }
    }
    var OpacityUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const opacityOptions = particle.options.opacity;
        particle.opacity = {
          enable: opacityOptions.animation.enable,
          max: (0, Utils_1.getRangeMax)(opacityOptions.value),
          min: (0, Utils_1.getRangeMin)(opacityOptions.value),
          value: (0, Utils_1.getRangeValue)(opacityOptions.value),
          loops: 0,
          maxLoops: opacityOptions.animation.count
        };
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
          particle.opacity.status = Enums_1.AnimationStatus.increasing;
          const opacityRange = opacityOptions.value;
          particle.opacity.min = (0, Utils_1.getRangeMin)(opacityRange);
          particle.opacity.max = (0, Utils_1.getRangeMax)(opacityRange);
          switch (opacityAnimation.startValue) {
            case Enums_1.StartValueType.min:
              particle.opacity.value = particle.opacity.min;
              particle.opacity.status = Enums_1.AnimationStatus.increasing;
              break;
            case Enums_1.StartValueType.random:
              particle.opacity.value = (0, Utils_1.randomInRange)(particle.opacity);
              particle.opacity.status = Math.random() >= 0.5 ? Enums_1.AnimationStatus.increasing : Enums_1.AnimationStatus.decreasing;
              break;
            case Enums_1.StartValueType.max:
            default:
              particle.opacity.value = particle.opacity.max;
              particle.opacity.status = Enums_1.AnimationStatus.decreasing;
              break;
          }
          particle.opacity.velocity = opacityAnimation.speed / 100 * this.container.retina.reduceFactor;
          if (!opacityAnimation.sync) {
            particle.opacity.velocity *= Math.random();
          }
        }
      }
      isEnabled(particle) {
        var _a, _b, _c;
        return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0));
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateOpacity(particle, delta);
      }
    };
    exports.OpacityUpdater = OpacityUpdater;
  }
});

// node_modules/tsparticles/Updaters/Opacity/index.js
var require_Opacity2 = __commonJS({
  "node_modules/tsparticles/Updaters/Opacity/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadOpacityUpdater = void 0;
    var OpacityUpdater_1 = require_OpacityUpdater();
    function loadOpacityUpdater(tsParticles) {
      tsParticles.addParticleUpdater("opacity", (container) => new OpacityUpdater_1.OpacityUpdater(container));
    }
    exports.loadOpacityUpdater = loadOpacityUpdater;
  }
});

// node_modules/tsparticles/Updaters/Size/SizeUpdater.js
var require_SizeUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Size/SizeUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SizeUpdater = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    function checkDestroy(particle, value, minValue, maxValue) {
      switch (particle.options.size.animation.destroy) {
        case Enums_1.DestroyType.max:
          if (value >= maxValue) {
            particle.destroy();
          }
          break;
        case Enums_1.DestroyType.min:
          if (value <= minValue) {
            particle.destroy();
          }
          break;
      }
    }
    function updateSize(particle, delta) {
      var _a, _b, _c, _d;
      const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
      const minValue = particle.size.min;
      const maxValue = particle.size.max;
      if (!(!particle.destroyed && particle.size.enable && (((_b = particle.size.loops) !== null && _b !== void 0 ? _b : 0) <= 0 || ((_c = particle.size.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.size.maxLoops) !== null && _d !== void 0 ? _d : 0)))) {
        return;
      }
      switch (particle.size.status) {
        case Enums_1.AnimationStatus.increasing:
          if (particle.size.value >= maxValue) {
            particle.size.status = Enums_1.AnimationStatus.decreasing;
            if (!particle.size.loops) {
              particle.size.loops = 0;
            }
            particle.size.loops++;
          } else {
            particle.size.value += sizeVelocity;
          }
          break;
        case Enums_1.AnimationStatus.decreasing:
          if (particle.size.value <= minValue) {
            particle.size.status = Enums_1.AnimationStatus.increasing;
            if (!particle.size.loops) {
              particle.size.loops = 0;
            }
            particle.size.loops++;
          } else {
            particle.size.value -= sizeVelocity;
          }
      }
      checkDestroy(particle, particle.size.value, minValue, maxValue);
      if (!particle.destroyed) {
        particle.size.value = (0, Utils_1.clamp)(particle.size.value, minValue, maxValue);
      }
    }
    var SizeUpdater = class {
      init() {
      }
      isEnabled(particle) {
        var _a, _b, _c;
        return !particle.destroyed && !particle.spawning && particle.size.enable && (((_a = particle.size.loops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.size.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.size.maxLoops) !== null && _c !== void 0 ? _c : 0));
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateSize(particle, delta);
      }
    };
    exports.SizeUpdater = SizeUpdater;
  }
});

// node_modules/tsparticles/Updaters/Size/index.js
var require_Size2 = __commonJS({
  "node_modules/tsparticles/Updaters/Size/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSizeUpdater = void 0;
    var SizeUpdater_1 = require_SizeUpdater();
    function loadSizeUpdater(tsParticles) {
      tsParticles.addParticleUpdater("size", () => new SizeUpdater_1.SizeUpdater());
    }
    exports.loadSizeUpdater = loadSizeUpdater;
  }
});

// node_modules/tsparticles/Updaters/StrokeColor/StrokeColorUpdater.js
var require_StrokeColorUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/StrokeColor/StrokeColorUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StrokeColorUpdater = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    function updateColorValue(delta, value, valueAnimation, max, decrease) {
      var _a;
      const colorValue = value;
      if (!colorValue || !colorValue.enable) {
        return;
      }
      const offset = (0, Utils_1.randomInRange)(valueAnimation.offset);
      const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
      if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
        colorValue.value += velocity;
        if (decrease && colorValue.value > max) {
          colorValue.status = Enums_1.AnimationStatus.decreasing;
          colorValue.value -= colorValue.value % max;
        }
      } else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
          colorValue.status = Enums_1.AnimationStatus.increasing;
          colorValue.value += colorValue.value;
        }
      }
      if (colorValue.value > max) {
        colorValue.value %= max;
      }
    }
    function updateStrokeColor(particle, delta) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      if (!((_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color)) {
        return;
      }
      const animationOptions = particle.stroke.color.animation;
      const h = (_c = (_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h) !== null && _c !== void 0 ? _c : (_d = particle.color) === null || _d === void 0 ? void 0 : _d.h;
      if (h) {
        updateColorValue(delta, h, animationOptions.h, 360, false);
      }
      const s = (_f = (_e = particle.strokeColor) === null || _e === void 0 ? void 0 : _e.s) !== null && _f !== void 0 ? _f : (_g = particle.color) === null || _g === void 0 ? void 0 : _g.s;
      if (s) {
        updateColorValue(delta, s, animationOptions.s, 100, true);
      }
      const l = (_j = (_h = particle.strokeColor) === null || _h === void 0 ? void 0 : _h.l) !== null && _j !== void 0 ? _j : (_k = particle.color) === null || _k === void 0 ? void 0 : _k.l;
      if (l) {
        updateColorValue(delta, l, animationOptions.l, 100, true);
      }
    }
    var StrokeColorUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        var _a, _b;
        const container = this.container;
        particle.stroke = particle.options.stroke instanceof Array ? (0, Utils_1.itemFromArray)(particle.options.stroke, particle.id, particle.options.reduceDuplicates) : particle.options.stroke;
        particle.strokeWidth = particle.stroke.width * container.retina.pixelRatio;
        const strokeHslColor = (_a = (0, Utils_1.colorToHsl)(particle.stroke.color)) !== null && _a !== void 0 ? _a : particle.getFillColor();
        if (strokeHslColor) {
          particle.strokeColor = (0, Utils_1.getHslAnimationFromHsl)(strokeHslColor, (_b = particle.stroke.color) === null || _b === void 0 ? void 0 : _b.animation, container.retina.reduceFactor);
        }
      }
      isEnabled(particle) {
        var _a, _b, _c, _d;
        const color = (_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color;
        return !particle.destroyed && !particle.spawning && !!color && (((_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h.value) !== void 0 && color.animation.h.enable || ((_c = particle.strokeColor) === null || _c === void 0 ? void 0 : _c.s.value) !== void 0 && color.animation.s.enable || ((_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.l.value) !== void 0 && color.animation.l.enable);
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateStrokeColor(particle, delta);
      }
    };
    exports.StrokeColorUpdater = StrokeColorUpdater;
  }
});

// node_modules/tsparticles/Updaters/StrokeColor/index.js
var require_StrokeColor = __commonJS({
  "node_modules/tsparticles/Updaters/StrokeColor/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadStrokeColorUpdater = void 0;
    var StrokeColorUpdater_1 = require_StrokeColorUpdater();
    function loadStrokeColorUpdater(tsParticles) {
      tsParticles.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater_1.StrokeColorUpdater(container));
    }
    exports.loadStrokeColorUpdater = loadStrokeColorUpdater;
  }
});

// node_modules/tsparticles/Updaters/OutModes/Utils.js
var require_Utils4 = __commonJS({
  "node_modules/tsparticles/Updaters/OutModes/Utils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bounceVertical = exports.bounceHorizontal = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    function bounceHorizontal(data) {
      if (!(data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceHorizontal || data.outMode === "bounceHorizontal" || data.outMode === Enums_1.OutMode.split)) {
        return;
      }
      const velocity = data.particle.velocity.x;
      let bounced = false;
      if (data.direction === Enums_1.OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === Enums_1.OutModeDirection.left && data.bounds.left <= 0 && velocity < 0) {
        const newVelocity = (0, Utils_1.getRangeValue)(data.particle.options.bounce.horizontal.value);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
      }
      if (!bounced) {
        return;
      }
      const minPos = data.offset.x + data.size;
      if (data.bounds.right >= data.canvasSize.width) {
        data.particle.position.x = data.canvasSize.width - minPos;
      } else if (data.bounds.left <= 0) {
        data.particle.position.x = minPos;
      }
      if (data.outMode === Enums_1.OutMode.split) {
        data.particle.destroy();
      }
    }
    exports.bounceHorizontal = bounceHorizontal;
    function bounceVertical(data) {
      if (data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceVertical || data.outMode === "bounceVertical" || data.outMode === Enums_1.OutMode.split) {
        const velocity = data.particle.velocity.y;
        let bounced = false;
        if (data.direction === Enums_1.OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === Enums_1.OutModeDirection.top && data.bounds.top <= 0 && velocity < 0) {
          const newVelocity = (0, Utils_1.getRangeValue)(data.particle.options.bounce.vertical.value);
          data.particle.velocity.y *= -newVelocity;
          bounced = true;
        }
        if (!bounced) {
          return;
        }
        const minPos = data.offset.y + data.size;
        if (data.bounds.bottom >= data.canvasSize.height) {
          data.particle.position.y = data.canvasSize.height - minPos;
        } else if (data.bounds.top <= 0) {
          data.particle.position.y = minPos;
        }
        if (data.outMode === Enums_1.OutMode.split) {
          data.particle.destroy();
        }
      }
    }
    exports.bounceVertical = bounceVertical;
  }
});

// node_modules/tsparticles/Updaters/OutModes/OutOfCanvasUpdater.js
var require_OutOfCanvasUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/OutModes/OutOfCanvasUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutOfCanvasUpdater = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var Utils_2 = require_Utils4();
    var OutOfCanvasUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init() {
      }
      isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
      }
      update(particle, delta) {
        var _a, _b, _c, _d;
        const outModes = particle.options.move.outModes;
        this.updateOutMode(particle, delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, Enums_1.OutModeDirection.bottom);
        this.updateOutMode(particle, delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, Enums_1.OutModeDirection.left);
        this.updateOutMode(particle, delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, Enums_1.OutModeDirection.right);
        this.updateOutMode(particle, delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, Enums_1.OutModeDirection.top);
      }
      updateOutMode(particle, delta, outMode, direction) {
        switch (outMode) {
          case Enums_1.OutMode.bounce:
          case Enums_1.OutMode.bounceVertical:
          case Enums_1.OutMode.bounceHorizontal:
          case "bounceVertical":
          case "bounceHorizontal":
          case Enums_1.OutMode.split:
            this.bounce(particle, delta, direction, outMode);
            break;
          case Enums_1.OutMode.destroy:
            this.destroy(particle, direction);
            break;
          case Enums_1.OutMode.out:
            this.out(particle, direction);
            break;
          case Enums_1.OutMode.none:
          default:
            this.none(particle, direction);
            break;
        }
      }
      destroy(particle, direction) {
        const container = this.container;
        if ((0, Utils_1.isPointInside)(particle.position, container.canvas.size, particle.getRadius(), direction)) {
          return;
        }
        container.particles.remove(particle, void 0, true);
      }
      out(particle, direction) {
        const container = this.container;
        if ((0, Utils_1.isPointInside)(particle.position, container.canvas.size, particle.getRadius(), direction)) {
          return;
        }
        const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
          bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
          left: -particle.getRadius() - particle.offset.x,
          right: canvasSize.width + particle.getRadius() + particle.offset.x,
          top: -particle.getRadius() - particle.offset.y
        }, sizeValue = particle.getRadius(), nextBounds = (0, Utils_1.calculateBounds)(particle.position, sizeValue);
        if (direction === Enums_1.OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
          particle.position.x = newPos.left;
          particle.initialPosition.x = particle.position.x;
          if (!wrap) {
            particle.position.y = Math.random() * canvasSize.height;
            particle.initialPosition.y = particle.position.y;
          }
        } else if (direction === Enums_1.OutModeDirection.left && nextBounds.right < -particle.offset.x) {
          particle.position.x = newPos.right;
          particle.initialPosition.x = particle.position.x;
          if (!wrap) {
            particle.position.y = Math.random() * canvasSize.height;
            particle.initialPosition.y = particle.position.y;
          }
        }
        if (direction === Enums_1.OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
          if (!wrap) {
            particle.position.x = Math.random() * canvasSize.width;
            particle.initialPosition.x = particle.position.x;
          }
          particle.position.y = newPos.top;
          particle.initialPosition.y = particle.position.y;
        } else if (direction === Enums_1.OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
          if (!wrap) {
            particle.position.x = Math.random() * canvasSize.width;
            particle.initialPosition.x = particle.position.x;
          }
          particle.position.y = newPos.bottom;
          particle.initialPosition.y = particle.position.y;
        }
      }
      bounce(particle, delta, direction, outMode) {
        const container = this.container;
        let handled = false;
        for (const [, plugin] of container.plugins) {
          if (plugin.particleBounce !== void 0) {
            handled = plugin.particleBounce(particle, delta, direction);
          }
          if (handled) {
            break;
          }
        }
        if (handled) {
          return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = (0, Utils_1.calculateBounds)(pos, size), canvasSize = container.canvas.size;
        (0, Utils_2.bounceHorizontal)({ particle, outMode, direction, bounds, canvasSize, offset, size });
        (0, Utils_2.bounceVertical)({ particle, outMode, direction, bounds, canvasSize, offset, size });
      }
      none(particle, direction) {
        if (particle.options.move.distance.horizontal && (direction === Enums_1.OutModeDirection.left || direction === Enums_1.OutModeDirection.right) || particle.options.move.distance.vertical && (direction === Enums_1.OutModeDirection.top || direction === Enums_1.OutModeDirection.bottom)) {
          return;
        }
        const gravityOptions = particle.options.move.gravity, container = this.container;
        const canvasSize = container.canvas.size;
        const pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
          if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) {
            return;
          }
          if (!(0, Utils_1.isPointInside)(particle.position, container.canvas.size, pRadius, direction)) {
            container.particles.remove(particle);
          }
        } else {
          const position = particle.position;
          if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === Enums_1.OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === Enums_1.OutModeDirection.top) {
            container.particles.remove(particle);
          }
        }
      }
    };
    exports.OutOfCanvasUpdater = OutOfCanvasUpdater;
  }
});

// node_modules/tsparticles/Updaters/OutModes/index.js
var require_OutModes2 = __commonJS({
  "node_modules/tsparticles/Updaters/OutModes/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadOutModesUpdater = void 0;
    var OutOfCanvasUpdater_1 = require_OutOfCanvasUpdater();
    function loadOutModesUpdater(tsParticles) {
      tsParticles.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater_1.OutOfCanvasUpdater(container));
    }
    exports.loadOutModesUpdater = loadOutModesUpdater;
  }
});

// node_modules/tsparticles/Updaters/Roll/RollUpdater.js
var require_RollUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Roll/RollUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RollUpdater = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    function updateRoll(particle, delta) {
      const roll = particle.options.roll;
      if (!particle.roll || !roll.enable) {
        return;
      }
      const speed = particle.roll.speed * delta.factor;
      const max = 2 * Math.PI;
      particle.roll.angle += speed;
      if (particle.roll.angle > max) {
        particle.roll.angle -= max;
      }
    }
    var RollUpdater = class {
      init(particle) {
        const rollOpt = particle.options.roll;
        if (rollOpt.enable) {
          particle.roll = {
            angle: Math.random() * Math.PI * 2,
            speed: (0, Utils_1.getRangeValue)(rollOpt.speed) / 360
          };
          if (rollOpt.backColor) {
            particle.backColor = (0, Utils_1.colorToHsl)(rollOpt.backColor);
          } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
            const alterType = Math.random() >= 0.5 ? Enums_1.AlterType.darken : Enums_1.AlterType.enlighten;
            particle.roll.alter = {
              type: alterType,
              value: alterType === Enums_1.AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value
            };
          } else if (rollOpt.darken.enable) {
            particle.roll.alter = {
              type: Enums_1.AlterType.darken,
              value: rollOpt.darken.value
            };
          } else if (rollOpt.enlighten.enable) {
            particle.roll.alter = {
              type: Enums_1.AlterType.enlighten,
              value: rollOpt.enlighten.value
            };
          }
        } else {
          particle.roll = { angle: 0, speed: 0 };
        }
      }
      isEnabled(particle) {
        const roll = particle.options.roll;
        return !particle.destroyed && !particle.spawning && roll.enable;
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateRoll(particle, delta);
      }
    };
    exports.RollUpdater = RollUpdater;
  }
});

// node_modules/tsparticles/Updaters/Roll/index.js
var require_Roll2 = __commonJS({
  "node_modules/tsparticles/Updaters/Roll/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadRollUpdater = void 0;
    var RollUpdater_1 = require_RollUpdater();
    function loadRollUpdater(tsParticles) {
      tsParticles.addParticleUpdater("roll", () => new RollUpdater_1.RollUpdater());
    }
    exports.loadRollUpdater = loadRollUpdater;
  }
});

// node_modules/tsparticles/Updaters/Tilt/TiltUpdater.js
var require_TiltUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Tilt/TiltUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TiltUpdater = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    function updateTilt(particle, delta) {
      var _a;
      if (!particle.tilt) {
        return;
      }
      const tilt = particle.options.tilt;
      const tiltAnimation = tilt.animation;
      const speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
      const max = 2 * Math.PI;
      if (!tiltAnimation.enable) {
        return;
      }
      switch (particle.tilt.status) {
        case Enums_1.AnimationStatus.increasing:
          particle.tilt.value += speed;
          if (particle.tilt.value > max) {
            particle.tilt.value -= max;
          }
          break;
        case Enums_1.AnimationStatus.decreasing:
        default:
          particle.tilt.value -= speed;
          if (particle.tilt.value < 0) {
            particle.tilt.value += max;
          }
          break;
      }
    }
    var TiltUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const tiltOptions = particle.options.tilt;
        particle.tilt = {
          enable: tiltOptions.enable,
          value: (0, Utils_1.getRangeValue)(tiltOptions.value) * Math.PI / 180,
          sinDirection: Math.random() >= 0.5 ? 1 : -1,
          cosDirection: Math.random() >= 0.5 ? 1 : -1
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === Enums_1.TiltDirection.random) {
          const index = Math.floor(Math.random() * 2);
          tiltDirection = index > 0 ? Enums_1.TiltDirection.counterClockwise : Enums_1.TiltDirection.clockwise;
        }
        switch (tiltDirection) {
          case Enums_1.TiltDirection.counterClockwise:
          case "counterClockwise":
            particle.tilt.status = Enums_1.AnimationStatus.decreasing;
            break;
          case Enums_1.TiltDirection.clockwise:
            particle.tilt.status = Enums_1.AnimationStatus.increasing;
            break;
        }
        const tiltAnimation = particle.options.tilt.animation;
        if (tiltAnimation.enable) {
          particle.tilt.velocity = tiltAnimation.speed / 360 * this.container.retina.reduceFactor;
          if (!tiltAnimation.sync) {
            particle.tilt.velocity *= Math.random();
          }
        }
      }
      isEnabled(particle) {
        const tilt = particle.options.tilt;
        const tiltAnimation = tilt.animation;
        return !particle.destroyed && !particle.spawning && tiltAnimation.enable;
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateTilt(particle, delta);
      }
    };
    exports.TiltUpdater = TiltUpdater;
  }
});

// node_modules/tsparticles/Updaters/Tilt/index.js
var require_Tilt2 = __commonJS({
  "node_modules/tsparticles/Updaters/Tilt/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadTiltUpdater = void 0;
    var TiltUpdater_1 = require_TiltUpdater();
    function loadTiltUpdater(tsParticles) {
      tsParticles.addParticleUpdater("tilt", (container) => new TiltUpdater_1.TiltUpdater(container));
    }
    exports.loadTiltUpdater = loadTiltUpdater;
  }
});

// node_modules/tsparticles/Updaters/Wobble/WobbleUpdater.js
var require_WobbleUpdater = __commonJS({
  "node_modules/tsparticles/Updaters/Wobble/WobbleUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WobbleUpdater = void 0;
    var Utils_1 = require_Utils2();
    function updateWobble(particle, delta) {
      var _a;
      const wobble = particle.options.wobble;
      if (!wobble.enable || !particle.wobble) {
        return;
      }
      const speed = particle.wobble.speed * delta.factor;
      const distance = ((_a = particle.retina.wobbleDistance) !== null && _a !== void 0 ? _a : 0) * delta.factor / (1e3 / 60);
      const max = 2 * Math.PI;
      particle.wobble.angle += speed;
      if (particle.wobble.angle > max) {
        particle.wobble.angle -= max;
      }
      particle.position.x += distance * Math.cos(particle.wobble.angle);
      particle.position.y += distance * Math.abs(Math.sin(particle.wobble.angle));
    }
    var WobbleUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const wobbleOpt = particle.options.wobble;
        if (wobbleOpt.enable) {
          particle.wobble = {
            angle: Math.random() * Math.PI * 2,
            speed: (0, Utils_1.getRangeValue)(wobbleOpt.speed) / 360
          };
        } else {
          particle.wobble = {
            angle: 0,
            speed: 0
          };
        }
        particle.retina.wobbleDistance = (0, Utils_1.getRangeValue)(wobbleOpt.distance) * this.container.retina.pixelRatio;
      }
      isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && particle.options.wobble.enable;
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateWobble(particle, delta);
      }
    };
    exports.WobbleUpdater = WobbleUpdater;
  }
});

// node_modules/tsparticles/Updaters/Wobble/index.js
var require_Wobble2 = __commonJS({
  "node_modules/tsparticles/Updaters/Wobble/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadWobbleUpdater = void 0;
    var WobbleUpdater_1 = require_WobbleUpdater();
    function loadWobbleUpdater(tsParticles) {
      tsParticles.addParticleUpdater("wobble", (container) => new WobbleUpdater_1.WobbleUpdater(container));
    }
    exports.loadWobbleUpdater = loadWobbleUpdater;
  }
});

// node_modules/tsparticles/Core/ExternalInteractorBase.js
var require_ExternalInteractorBase = __commonJS({
  "node_modules/tsparticles/Core/ExternalInteractorBase.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExternalInteractorBase = void 0;
    var Enums_1 = require_Enums();
    var ExternalInteractorBase = class {
      constructor(container) {
        this.container = container;
        this.type = Enums_1.InteractorType.External;
      }
    };
    exports.ExternalInteractorBase = ExternalInteractorBase;
  }
});

// node_modules/tsparticles/Interactions/External/Attract/Attractor.js
var require_Attractor = __commonJS({
  "node_modules/tsparticles/Interactions/External/Attract/Attractor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Attractor = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var Vector_1 = require_Vector();
    var Attractor = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events;
        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
          return false;
        }
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return (0, Utils_1.isInArray)(Enums_1.HoverMode.attract, hoverMode) || (0, Utils_1.isInArray)(Enums_1.ClickMode.attract, clickMode);
      }
      reset() {
      }
      interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;
        if (mouseMoveStatus && hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.attract, hoverMode)) {
          this.hoverAttract();
        } else if (clickEnabled && (0, Utils_1.isInArray)(Enums_1.ClickMode.attract, clickMode)) {
          this.clickAttract();
        }
      }
      hoverAttract() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
          return;
        }
        const attractRadius = container.retina.attractModeDistance;
        this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
      }
      processAttract(position, attractRadius, area) {
        const container = this.container;
        const attractOptions = container.actualOptions.interactivity.modes.attract;
        const query = container.particles.quadTree.query(area);
        for (const particle of query) {
          const { dx, dy, distance } = (0, Utils_1.getDistances)(particle.position, position);
          const velocity = attractOptions.speed * attractOptions.factor;
          const attractFactor = (0, Utils_1.clamp)((0, Utils_1.calcEasing)(1 - distance / attractRadius, attractOptions.easing) * velocity, 0, attractOptions.maxSpeed);
          const normVec = Vector_1.Vector.create(distance === 0 ? velocity : dx / distance * attractFactor, distance === 0 ? velocity : dy / distance * attractFactor);
          particle.position.subFrom(normVec);
        }
      }
      clickAttract() {
        const container = this.container;
        if (!container.attract.finish) {
          if (!container.attract.count) {
            container.attract.count = 0;
          }
          container.attract.count++;
          if (container.attract.count === container.particles.count) {
            container.attract.finish = true;
          }
        }
        if (container.attract.clicking) {
          const mousePos = container.interactivity.mouse.clickPosition;
          if (!mousePos) {
            return;
          }
          const attractRadius = container.retina.attractModeDistance;
          this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
        } else if (container.attract.clicking === false) {
          container.attract.particles = [];
        }
        return;
      }
    };
    exports.Attractor = Attractor;
  }
});

// node_modules/tsparticles/Interactions/External/Attract/index.js
var require_Attract3 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Attract/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalAttractInteraction = void 0;
    var Attractor_1 = require_Attractor();
    function loadExternalAttractInteraction(tsParticles) {
      tsParticles.addInteractor("externalAttract", (container) => new Attractor_1.Attractor(container));
    }
    exports.loadExternalAttractInteraction = loadExternalAttractInteraction;
  }
});

// node_modules/tsparticles/Interactions/External/Bounce/Bouncer.js
var require_Bouncer = __commonJS({
  "node_modules/tsparticles/Interactions/External/Bounce/Bouncer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bouncer = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var Vector_1 = require_Vector();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var Bouncer = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events, divs = events.onDiv;
        return mouse.position && events.onHover.enable && (0, Utils_1.isInArray)(Enums_1.HoverMode.bounce, events.onHover.mode) || (0, Utils_1.isDivModeEnabled)(Enums_1.DivMode.bounce, divs);
      }
      interact() {
        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.bounce, hoverMode)) {
          this.processMouseBounce();
        } else {
          (0, Utils_1.divModeExecute)(Enums_1.DivMode.bounce, divs, (selector, div) => this.singleSelectorBounce(selector, div));
        }
      }
      reset() {
      }
      processMouseBounce() {
        const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
        if (mousePos) {
          this.processBounce(mousePos, radius, new Utils_1.Circle(mousePos.x, mousePos.y, radius + tolerance));
        }
      }
      singleSelectorBounce(selector, div) {
        const container = this.container;
        const query = document.querySelectorAll(selector);
        if (!query.length) {
          return;
        }
        query.forEach((item) => {
          const elem = item, pxRatio = container.retina.pixelRatio, pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
          }, radius = elem.offsetWidth / 2 * pxRatio, tolerance = 10 * pxRatio;
          const area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, radius + tolerance) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
          this.processBounce(pos, radius, area);
        });
      }
      processBounce(position, radius, area) {
        const query = this.container.particles.quadTree.query(area);
        for (const particle of query) {
          if (area instanceof Utils_1.Circle) {
            (0, Utils_1.circleBounce)((0, Utils_1.circleBounceDataFromParticle)(particle), {
              position,
              radius,
              mass: radius ** 2 * Math.PI / 2,
              velocity: Vector_1.Vector.origin,
              factor: Vector_1.Vector.origin
            });
          } else if (area instanceof Utils_1.Rectangle) {
            (0, Utils_1.rectBounce)(particle, (0, Utils_1.calculateBounds)(position, radius));
          }
        }
      }
    };
    exports.Bouncer = Bouncer;
  }
});

// node_modules/tsparticles/Interactions/External/Bounce/index.js
var require_Bounce3 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Bounce/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalBounceInteraction = void 0;
    var Bouncer_1 = require_Bouncer();
    function loadExternalBounceInteraction(tsParticles) {
      tsParticles.addInteractor("externalBounce", (container) => new Bouncer_1.Bouncer(container));
    }
    exports.loadExternalBounceInteraction = loadExternalBounceInteraction;
  }
});

// node_modules/tsparticles/Interactions/External/Bubble/ProcessBubbleType.js
var require_ProcessBubbleType = __commonJS({
  "node_modules/tsparticles/Interactions/External/Bubble/ProcessBubbleType.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProcessBubbleType = void 0;
    var ProcessBubbleType;
    (function(ProcessBubbleType2) {
      ProcessBubbleType2["color"] = "color";
      ProcessBubbleType2["opacity"] = "opacity";
      ProcessBubbleType2["size"] = "size";
    })(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));
  }
});

// node_modules/tsparticles/Interactions/External/Bubble/Bubbler.js
var require_Bubbler = __commonJS({
  "node_modules/tsparticles/Interactions/External/Bubble/Bubbler.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bubbler = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var ProcessBubbleType_1 = require_ProcessBubbleType();
    function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
      if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return (0, Utils_1.clamp)(value, particleValue, modeValue);
      } else if (modeValue < optionsValue) {
        const value = particleValue - (optionsValue - modeValue) * ratio;
        return (0, Utils_1.clamp)(value, modeValue, particleValue);
      }
    }
    var Bubbler = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events, divs = events.onDiv, divBubble = (0, Utils_1.isDivModeEnabled)(Enums_1.DivMode.bubble, divs);
        if (!(divBubble || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
          return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return (0, Utils_1.isInArray)(Enums_1.HoverMode.bubble, hoverMode) || (0, Utils_1.isInArray)(Enums_1.ClickMode.bubble, clickMode) || divBubble;
      }
      reset(particle, force) {
        if (!(!particle.bubble.inRange || force)) {
          return;
        }
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
      }
      interact() {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.bubble, hoverMode)) {
          this.hoverBubble();
        } else if (clickEnabled && (0, Utils_1.isInArray)(Enums_1.ClickMode.bubble, clickMode)) {
          this.clickBubble();
        } else {
          (0, Utils_1.divModeExecute)(Enums_1.DivMode.bubble, divs, (selector, div) => this.singleSelectorHover(selector, div));
        }
      }
      singleSelectorHover(selector, div) {
        const container = this.container, selectors = document.querySelectorAll(selector);
        if (!selectors.length) {
          return;
        }
        selectors.forEach((item) => {
          const elem = item, pxRatio = container.retina.pixelRatio, pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
          }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area);
          for (const particle of query) {
            if (!area.contains(particle.getPosition())) {
              continue;
            }
            particle.bubble.inRange = true;
            const divs = container.actualOptions.interactivity.modes.bubble.divs;
            const divBubble = (0, Utils_1.divMode)(divs, elem);
            if (!particle.bubble.div || particle.bubble.div !== elem) {
              this.reset(particle, true);
              particle.bubble.div = elem;
            }
            this.hoverBubbleSize(particle, 1, divBubble);
            this.hoverBubbleOpacity(particle, 1, divBubble);
            this.hoverBubbleColor(particle, 1, divBubble);
          }
        });
      }
      process(particle, distMouse, timeSpent, data) {
        const container = this.container, bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === void 0) {
          return;
        }
        const options = container.actualOptions, bubbleDuration = options.interactivity.modes.bubble.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value || 0, type = data.type;
        if (bubbleParam === particlesParam) {
          return;
        }
        if (!container.bubble.durationEnd) {
          if (distMouse <= bubbleDistance) {
            const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
            if (obj !== bubbleParam) {
              const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
              if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                particle.bubble.radius = value;
              }
              if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                particle.bubble.opacity = value;
              }
            }
          } else {
            if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
              delete particle.bubble.radius;
            }
            if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
              delete particle.bubble.opacity;
            }
          }
        } else if (pObjBubble) {
          if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
            delete particle.bubble.radius;
          }
          if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
            delete particle.bubble.opacity;
          }
        }
      }
      clickBubble() {
        var _a, _b;
        const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition;
        if (!mouseClickPos) {
          return;
        }
        const distance = container.retina.bubbleModeDistance, query = container.particles.quadTree.queryCircle(mouseClickPos, distance);
        for (const particle of query) {
          if (!container.bubble.clicking) {
            continue;
          }
          particle.bubble.inRange = !container.bubble.durationEnd;
          const pos = particle.getPosition(), distMouse = (0, Utils_1.getDistance)(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1e3;
          if (timeSpent > options.interactivity.modes.bubble.duration) {
            container.bubble.durationEnd = true;
          }
          if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
            container.bubble.clicking = false;
            container.bubble.durationEnd = false;
          }
          const sizeData = {
            bubbleObj: {
              optValue: container.retina.bubbleModeSize,
              value: particle.bubble.radius
            },
            particlesObj: {
              optValue: (0, Utils_1.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio,
              value: particle.size.value
            },
            type: ProcessBubbleType_1.ProcessBubbleType.size
          };
          this.process(particle, distMouse, timeSpent, sizeData);
          const opacityData = {
            bubbleObj: {
              optValue: options.interactivity.modes.bubble.opacity,
              value: particle.bubble.opacity
            },
            particlesObj: {
              optValue: (0, Utils_1.getRangeMax)(particle.options.opacity.value),
              value: (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1
            },
            type: ProcessBubbleType_1.ProcessBubbleType.opacity
          };
          this.process(particle, distMouse, timeSpent, opacityData);
          if (!container.bubble.durationEnd) {
            if (distMouse <= container.retina.bubbleModeDistance) {
              this.hoverBubbleColor(particle, distMouse);
            } else {
              delete particle.bubble.color;
            }
          } else {
            delete particle.bubble.color;
          }
        }
      }
      hoverBubble() {
        const container = this.container, mousePos = container.interactivity.mouse.position;
        if (mousePos === void 0) {
          return;
        }
        const distance = container.retina.bubbleModeDistance, query = container.particles.quadTree.queryCircle(mousePos, distance);
        for (const particle of query) {
          particle.bubble.inRange = true;
          const pos = particle.getPosition(), pointDistance = (0, Utils_1.getDistance)(pos, mousePos), ratio = 1 - pointDistance / distance;
          if (pointDistance <= distance) {
            if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
              this.hoverBubbleSize(particle, ratio);
              this.hoverBubbleOpacity(particle, ratio);
              this.hoverBubbleColor(particle, ratio);
            }
          } else {
            this.reset(particle);
          }
          if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) {
            this.reset(particle);
          }
        }
      }
      hoverBubbleSize(particle, ratio, divBubble) {
        const container = this.container, modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
        if (modeSize === void 0) {
          return;
        }
        const optSize = (0, Utils_1.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio;
        const pSize = particle.size.value;
        const size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== void 0) {
          particle.bubble.radius = size;
        }
      }
      hoverBubbleOpacity(particle, ratio, divBubble) {
        var _a, _b, _c;
        const container = this.container, options = container.actualOptions, modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;
        if (!modeOpacity) {
          return;
        }
        const optOpacity = particle.options.opacity.value;
        const pOpacity = (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1;
        const opacity = calculateBubbleValue(pOpacity, modeOpacity, (0, Utils_1.getRangeMax)(optOpacity), ratio);
        if (opacity !== void 0) {
          particle.bubble.opacity = opacity;
        }
      }
      hoverBubbleColor(particle, ratio, divBubble) {
        const options = this.container.actualOptions;
        const bubbleOptions = divBubble !== null && divBubble !== void 0 ? divBubble : options.interactivity.modes.bubble;
        if (!particle.bubble.finalColor) {
          const modeColor = bubbleOptions.color;
          if (!modeColor) {
            return;
          }
          const bubbleColor = modeColor instanceof Array ? (0, Utils_1.itemFromArray)(modeColor) : modeColor;
          particle.bubble.finalColor = (0, Utils_1.colorToHsl)(bubbleColor);
        }
        if (!particle.bubble.finalColor) {
          return;
        }
        if (bubbleOptions.mix) {
          particle.bubble.color = void 0;
          const pColor = particle.getFillColor();
          particle.bubble.color = pColor ? (0, Utils_1.rgbToHsl)((0, Utils_1.colorMix)(pColor, particle.bubble.finalColor, 1 - ratio, ratio)) : particle.bubble.finalColor;
        } else {
          particle.bubble.color = particle.bubble.finalColor;
        }
      }
    };
    exports.Bubbler = Bubbler;
  }
});

// node_modules/tsparticles/Interactions/External/Bubble/index.js
var require_Bubble2 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Bubble/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalBubbleInteraction = void 0;
    var Bubbler_1 = require_Bubbler();
    function loadExternalBubbleInteraction(tsParticles) {
      tsParticles.addInteractor("externalBubble", (container) => new Bubbler_1.Bubbler(container));
    }
    exports.loadExternalBubbleInteraction = loadExternalBubbleInteraction;
  }
});

// node_modules/tsparticles/Interactions/External/Connect/Connector.js
var require_Connector = __commonJS({
  "node_modules/tsparticles/Interactions/External/Connect/Connector.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Connector = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var Connector = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled() {
        const container = this.container, mouse = container.interactivity.mouse, events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
          return false;
        }
        return (0, Utils_1.isInArray)(Enums_1.HoverMode.connect, events.onHover.mode);
      }
      reset() {
      }
      interact() {
        const container = this.container, options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
          const mousePos = container.interactivity.mouse.position;
          if (!mousePos) {
            return;
          }
          const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance);
          let i = 0;
          for (const p1 of query) {
            const pos1 = p1.getPosition();
            for (const p2 of query.slice(i + 1)) {
              const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
              if (xDiff < distMax && yDiff < distMax) {
                container.canvas.drawConnectLine(p1, p2);
              }
            }
            ++i;
          }
        }
      }
    };
    exports.Connector = Connector;
  }
});

// node_modules/tsparticles/Interactions/External/Connect/index.js
var require_Connect2 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Connect/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalConnectInteraction = void 0;
    var Connector_1 = require_Connector();
    function loadExternalConnectInteraction(tsParticles) {
      tsParticles.addInteractor("externalConnect", (container) => new Connector_1.Connector(container));
    }
    exports.loadExternalConnectInteraction = loadExternalConnectInteraction;
  }
});

// node_modules/tsparticles/Interactions/External/Grab/Grabber.js
var require_Grabber = __commonJS({
  "node_modules/tsparticles/Interactions/External/Grab/Grabber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Grabber = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var Grabber = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled() {
        const container = this.container, mouse = container.interactivity.mouse, events = container.actualOptions.interactivity.events;
        return events.onHover.enable && !!mouse.position && (0, Utils_1.isInArray)(Enums_1.HoverMode.grab, events.onHover.mode);
      }
      reset() {
      }
      interact() {
        var _a;
        const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
          const mousePos = container.interactivity.mouse.position;
          if (!mousePos) {
            return;
          }
          const distance = container.retina.grabModeDistance, query = container.particles.quadTree.queryCircle(mousePos, distance);
          for (const particle of query) {
            const pos = particle.getPosition(), pointDistance = (0, Utils_1.getDistance)(pos, mousePos);
            if (pointDistance <= distance) {
              const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
              if (opacityLine <= 0) {
                continue;
              }
              const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;
              if (!container.particles.grabLineColor) {
                const linksOptions = options.interactivity.modes.grab.links;
                container.particles.grabLineColor = (0, Utils_1.getLinkRandomColor)(optColor, linksOptions.blink, linksOptions.consent);
              }
              const colorLine = (0, Utils_1.getLinkColor)(particle, void 0, container.particles.grabLineColor);
              if (!colorLine) {
                return;
              }
              container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
            }
          }
        }
      }
    };
    exports.Grabber = Grabber;
  }
});

// node_modules/tsparticles/Interactions/External/Grab/index.js
var require_Grab2 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Grab/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalGrabInteraction = void 0;
    var Grabber_1 = require_Grabber();
    function loadExternalGrabInteraction(tsParticles) {
      tsParticles.addInteractor("externalGrab", (container) => new Grabber_1.Grabber(container));
    }
    exports.loadExternalGrabInteraction = loadExternalGrabInteraction;
  }
});

// node_modules/tsparticles/Interactions/External/Repulse/Repulser.js
var require_Repulser = __commonJS({
  "node_modules/tsparticles/Interactions/External/Repulse/Repulser.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Repulser = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    var Vector_1 = require_Vector();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var Repulser = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events, divs = events.onDiv, divRepulse = (0, Utils_1.isDivModeEnabled)(Enums_1.DivMode.repulse, divs);
        if (!(divRepulse || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
          return false;
        }
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return (0, Utils_1.isInArray)(Enums_1.HoverMode.repulse, hoverMode) || (0, Utils_1.isInArray)(Enums_1.ClickMode.repulse, clickMode) || divRepulse;
      }
      reset() {
      }
      interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, Utils_1.isInArray)(Enums_1.HoverMode.repulse, hoverMode)) {
          this.hoverRepulse();
        } else if (clickEnabled && (0, Utils_1.isInArray)(Enums_1.ClickMode.repulse, clickMode)) {
          this.clickRepulse();
        } else {
          (0, Utils_1.divModeExecute)(Enums_1.DivMode.repulse, divs, (selector, div) => this.singleSelectorRepulse(selector, div));
        }
      }
      singleSelectorRepulse(selector, div) {
        const container = this.container, query = document.querySelectorAll(selector);
        if (!query.length) {
          return;
        }
        query.forEach((item) => {
          const elem = item, pxRatio = container.retina.pixelRatio, pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
          }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = container.actualOptions.interactivity.modes.repulse.divs, divRepulse = (0, Utils_1.divMode)(divs, elem);
          this.processRepulse(pos, repulseRadius, area, divRepulse);
        });
      }
      hoverRepulse() {
        const container = this.container, mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
          return;
        }
        const repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
      }
      processRepulse(position, repulseRadius, area, divRepulse) {
        var _a;
        const container = this.container, query = container.particles.quadTree.query(area), repulseOptions = container.actualOptions.interactivity.modes.repulse;
        for (const particle of query) {
          const { dx, dy, distance } = (0, Utils_1.getDistances)(particle.position, position), velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor, repulseFactor = (0, Utils_1.clamp)((0, Utils_1.calcEasing)(1 - distance / repulseRadius, repulseOptions.easing) * velocity, 0, repulseOptions.maxSpeed), normVec = Vector_1.Vector.create(distance === 0 ? velocity : dx / distance * repulseFactor, distance === 0 ? velocity : dy / distance * repulseFactor);
          particle.position.addTo(normVec);
        }
      }
      clickRepulse() {
        const container = this.container;
        if (!container.repulse.finish) {
          if (!container.repulse.count) {
            container.repulse.count = 0;
          }
          container.repulse.count++;
          if (container.repulse.count === container.particles.count) {
            container.repulse.finish = true;
          }
        }
        if (container.repulse.clicking) {
          const repulseDistance = container.retina.repulseModeDistance, repulseRadius = Math.pow(repulseDistance / 6, 3), mouseClickPos = container.interactivity.mouse.clickPosition;
          if (mouseClickPos === void 0) {
            return;
          }
          const range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range);
          for (const particle of query) {
            const { dx, dy, distance } = (0, Utils_1.getDistances)(mouseClickPos, particle.position), d = distance ** 2, velocity = container.actualOptions.interactivity.modes.repulse.speed, force = -repulseRadius * velocity / d;
            if (d <= repulseRadius) {
              container.repulse.particles.push(particle);
              const vect = Vector_1.Vector.create(dx, dy);
              vect.length = force;
              particle.velocity.setTo(vect);
            }
          }
        } else if (container.repulse.clicking === false) {
          for (const particle of container.repulse.particles) {
            particle.velocity.setTo(particle.initialVelocity);
          }
          container.repulse.particles = [];
        }
      }
    };
    exports.Repulser = Repulser;
  }
});

// node_modules/tsparticles/Interactions/External/Repulse/index.js
var require_Repulse3 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Repulse/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalRepulseInteraction = void 0;
    var Repulser_1 = require_Repulser();
    function loadExternalRepulseInteraction(tsParticles) {
      tsParticles.addInteractor("externalRepulse", (container) => new Repulser_1.Repulser(container));
    }
    exports.loadExternalRepulseInteraction = loadExternalRepulseInteraction;
  }
});

// node_modules/tsparticles/Interactions/External/Trail/TrailMaker.js
var require_TrailMaker = __commonJS({
  "node_modules/tsparticles/Interactions/External/Trail/TrailMaker.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TrailMaker = void 0;
    var Utils_1 = require_Utils2();
    var Enums_1 = require_Enums();
    var ExternalInteractorBase_1 = require_ExternalInteractorBase();
    var TrailMaker = class extends ExternalInteractorBase_1.ExternalInteractorBase {
      constructor(container) {
        super(container);
        this.delay = 0;
      }
      interact(delta) {
        var _a, _b, _c, _d;
        if (!this.container.retina.reduceFactor) {
          return;
        }
        const container = this.container, options = container.actualOptions, trailOptions = options.interactivity.modes.trail, optDelay = trailOptions.delay * 1e3 / this.container.retina.reduceFactor;
        if (this.delay < optDelay) {
          this.delay += delta.value;
        }
        if (this.delay < optDelay) {
          return;
        }
        let canEmit = true;
        if (trailOptions.pauseOnStop) {
          if (container.interactivity.mouse.position === this.lastPosition || ((_a = container.interactivity.mouse.position) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.x) && ((_c = container.interactivity.mouse.position) === null || _c === void 0 ? void 0 : _c.y) === ((_d = this.lastPosition) === null || _d === void 0 ? void 0 : _d.y)) {
            canEmit = false;
          }
        }
        if (container.interactivity.mouse.position) {
          this.lastPosition = {
            x: container.interactivity.mouse.position.x,
            y: container.interactivity.mouse.position.y
          };
        } else {
          delete this.lastPosition;
        }
        if (canEmit) {
          container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
        }
        this.delay -= optDelay;
      }
      isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events;
        return mouse.clicking && mouse.inside && !!mouse.position && (0, Utils_1.isInArray)(Enums_1.ClickMode.trail, events.onClick.mode) || mouse.inside && !!mouse.position && (0, Utils_1.isInArray)(Enums_1.HoverMode.trail, events.onHover.mode);
      }
      reset() {
      }
    };
    exports.TrailMaker = TrailMaker;
  }
});

// node_modules/tsparticles/Interactions/External/Trail/index.js
var require_Trail3 = __commonJS({
  "node_modules/tsparticles/Interactions/External/Trail/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalTrailInteraction = void 0;
    var TrailMaker_1 = require_TrailMaker();
    function loadExternalTrailInteraction(tsParticles) {
      tsParticles.addInteractor("externalTrail", (container) => new TrailMaker_1.TrailMaker(container));
    }
    exports.loadExternalTrailInteraction = loadExternalTrailInteraction;
  }
});

// node_modules/tsparticles/Core/ParticlesInteractorBase.js
var require_ParticlesInteractorBase = __commonJS({
  "node_modules/tsparticles/Core/ParticlesInteractorBase.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParticlesInteractorBase = void 0;
    var Enums_1 = require_Enums();
    var ParticlesInteractorBase = class {
      constructor(container) {
        this.container = container;
        this.type = Enums_1.InteractorType.Particles;
      }
    };
    exports.ParticlesInteractorBase = ParticlesInteractorBase;
  }
});

// node_modules/tsparticles/Interactions/Particles/Attract/Attractor.js
var require_Attractor2 = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Attract/Attractor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Attractor = void 0;
    var Utils_1 = require_Utils2();
    var ParticlesInteractorBase_1 = require_ParticlesInteractorBase();
    var Attractor = class extends ParticlesInteractorBase_1.ParticlesInteractorBase {
      constructor(container) {
        super(container);
      }
      interact(p1) {
        var _a;
        const container = this.container, distance = (_a = p1.retina.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query) {
          if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
            continue;
          }
          const pos2 = p2.getPosition(), { dx, dy } = (0, Utils_1.getDistances)(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1e3), ay = dy / (rotate.y * 1e3), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;
          p1.velocity.x -= ax * p1Factor;
          p1.velocity.y -= ay * p1Factor;
          p2.velocity.x += ax * p2Factor;
          p2.velocity.y += ay * p2Factor;
        }
      }
      isEnabled(particle) {
        return particle.options.move.attract.enable;
      }
      reset() {
      }
    };
    exports.Attractor = Attractor;
  }
});

// node_modules/tsparticles/Interactions/Particles/Attract/index.js
var require_Attract4 = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Attract/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadParticlesAttractInteraction = void 0;
    var Attractor_1 = require_Attractor2();
    function loadParticlesAttractInteraction(tsParticles) {
      tsParticles.addInteractor("particlesAttract", (container) => new Attractor_1.Attractor(container));
    }
    exports.loadParticlesAttractInteraction = loadParticlesAttractInteraction;
  }
});

// node_modules/tsparticles/Interactions/Particles/Collisions/Collider.js
var require_Collider = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Collisions/Collider.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collider = void 0;
    var Enums_1 = require_Enums();
    var Utils_1 = require_Utils2();
    var ParticlesInteractorBase_1 = require_ParticlesInteractorBase();
    function bounce(p1, p2) {
      (0, Utils_1.circleBounce)((0, Utils_1.circleBounceDataFromParticle)(p1), (0, Utils_1.circleBounceDataFromParticle)(p2));
    }
    function destroy(p1, p2) {
      if (!p1.unbreakable && !p2.unbreakable) {
        bounce(p1, p2);
      }
      if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
        p1.destroy();
      } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
        p2.destroy();
      } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
        if (p1.getRadius() >= p2.getRadius()) {
          p2.destroy();
        } else {
          p1.destroy();
        }
      }
    }
    var Collider = class extends ParticlesInteractorBase_1.ParticlesInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled(particle) {
        return particle.options.collisions.enable;
      }
      reset() {
      }
      interact(p1) {
        const container = this.container;
        const pos1 = p1.getPosition();
        const radius1 = p1.getRadius();
        const query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);
        for (const p2 of query) {
          if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
            continue;
          }
          const pos2 = p2.getPosition();
          if (Math.round(pos1.z) !== Math.round(pos2.z)) {
            continue;
          }
          const dist = (0, Utils_1.getDistance)(pos1, pos2);
          const radius2 = p2.getRadius();
          const distP = radius1 + radius2;
          if (dist <= distP) {
            this.resolveCollision(p1, p2);
          }
        }
      }
      resolveCollision(p1, p2) {
        switch (p1.options.collisions.mode) {
          case Enums_1.CollisionMode.absorb: {
            this.absorb(p1, p2);
            break;
          }
          case Enums_1.CollisionMode.bounce: {
            bounce(p1, p2);
            break;
          }
          case Enums_1.CollisionMode.destroy: {
            destroy(p1, p2);
            break;
          }
        }
      }
      absorb(p1, p2) {
        const container = this.container;
        const fps = container.fpsLimit / 1e3;
        if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
          p1.destroy();
        } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
          p2.destroy();
        } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
          if (p1.getRadius() >= p2.getRadius()) {
            const factor = (0, Utils_1.clamp)(p1.getRadius() / p2.getRadius(), 0, p2.getRadius()) * fps;
            p1.size.value += factor;
            p2.size.value -= factor;
            if (p2.getRadius() <= container.retina.pixelRatio) {
              p2.size.value = 0;
              p2.destroy();
            }
          } else {
            const factor = (0, Utils_1.clamp)(p2.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;
            p1.size.value -= factor;
            p2.size.value += factor;
            if (p1.getRadius() <= container.retina.pixelRatio) {
              p1.size.value = 0;
              p1.destroy();
            }
          }
        }
      }
    };
    exports.Collider = Collider;
  }
});

// node_modules/tsparticles/Interactions/Particles/Collisions/index.js
var require_Collisions2 = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Collisions/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadParticlesCollisionsInteraction = void 0;
    var Collider_1 = require_Collider();
    function loadParticlesCollisionsInteraction(tsParticles) {
      tsParticles.addInteractor("particlesCollisions", (container) => new Collider_1.Collider(container));
    }
    exports.loadParticlesCollisionsInteraction = loadParticlesCollisionsInteraction;
  }
});

// node_modules/tsparticles/Interactions/Particles/Links/Linker.js
var require_Linker = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Links/Linker.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Linker = void 0;
    var Utils_1 = require_Utils2();
    var ParticlesInteractorBase_1 = require_ParticlesInteractorBase();
    function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
      let distance = (0, Utils_1.getDistance)(pos1, pos2);
      if (!warp || distance <= optDistance) {
        return distance;
      }
      const pos2NE = {
        x: pos2.x - canvasSize.width,
        y: pos2.y
      };
      distance = (0, Utils_1.getDistance)(pos1, pos2NE);
      if (distance <= optDistance) {
        return distance;
      }
      const pos2SE = {
        x: pos2.x - canvasSize.width,
        y: pos2.y - canvasSize.height
      };
      distance = (0, Utils_1.getDistance)(pos1, pos2SE);
      if (distance <= optDistance) {
        return distance;
      }
      const pos2SW = {
        x: pos2.x,
        y: pos2.y - canvasSize.height
      };
      distance = (0, Utils_1.getDistance)(pos1, pos2SW);
      return distance;
    }
    var Linker = class extends ParticlesInteractorBase_1.ParticlesInteractorBase {
      constructor(container) {
        super(container);
      }
      isEnabled(particle) {
        return particle.options.links.enable;
      }
      reset() {
      }
      interact(p1) {
        var _a;
        p1.links = [];
        const pos1 = p1.getPosition();
        const container = this.container;
        const canvasSize = container.canvas.size;
        if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
          return;
        }
        const linkOpt1 = p1.options.links;
        const optOpacity = linkOpt1.opacity;
        const optDistance = (_a = p1.retina.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const warp = linkOpt1.warp;
        const range = warp ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
        const query = container.particles.quadTree.query(range);
        for (const p2 of query) {
          const linkOpt2 = p2.options.links;
          if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || p1.links.map((t) => t.destination).indexOf(p2) !== -1 || p2.links.map((t) => t.destination).indexOf(p1) !== -1) {
            continue;
          }
          const pos2 = p2.getPosition();
          if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
            continue;
          }
          const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
          if (distance > optDistance) {
            return;
          }
          const opacityLine = (1 - distance / optDistance) * optOpacity;
          this.setColor(p1);
          p1.links.push({
            destination: p2,
            opacity: opacityLine
          });
        }
      }
      setColor(p1) {
        const container = this.container;
        const linksOptions = p1.options.links;
        let linkColor = linksOptions.id === void 0 ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
        if (!linkColor) {
          const optColor = linksOptions.color;
          linkColor = (0, Utils_1.getLinkRandomColor)(optColor, linksOptions.blink, linksOptions.consent);
          if (linksOptions.id === void 0) {
            container.particles.linksColor = linkColor;
          } else {
            container.particles.linksColors.set(linksOptions.id, linkColor);
          }
        }
      }
    };
    exports.Linker = Linker;
  }
});

// node_modules/tsparticles/Interactions/Particles/Links/LinkInstance.js
var require_LinkInstance = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Links/LinkInstance.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkInstance = void 0;
    var Utils_1 = require_Utils2();
    var LinkInstance = class {
      constructor(container) {
        this.container = container;
      }
      particleCreated(particle) {
        const linkParticle = particle;
        linkParticle.links = [];
      }
      particleDestroyed(particle) {
        const linkParticle = particle;
        linkParticle.links = [];
      }
      drawParticle(context, particle) {
        const linkParticle = particle;
        const container = this.container;
        const particles = container.particles;
        const pOptions = particle.options;
        if (linkParticle.links.length > 0) {
          context.save();
          const p1Links = linkParticle.links.filter((l) => {
            const linkFreq = container.particles.getLinkFrequency(linkParticle, l.destination);
            return linkFreq <= pOptions.links.frequency;
          });
          for (const link of p1Links) {
            const p2 = link.destination;
            if (pOptions.links.triangles.enable) {
              const links2 = p1Links.map((l) => l.destination);
              const vertices = p2.links.filter((t) => {
                const linkFreq = container.particles.getLinkFrequency(p2, t.destination);
                return linkFreq <= p2.options.links.frequency && links2.indexOf(t.destination) >= 0;
              });
              if (vertices.length) {
                for (const vertex of vertices) {
                  const p3 = vertex.destination;
                  const triangleFreq = particles.getTriangleFrequency(linkParticle, p2, p3);
                  if (triangleFreq > pOptions.links.triangles.frequency) {
                    continue;
                  }
                  this.drawLinkTriangle(linkParticle, link, vertex);
                }
              }
            }
            if (link.opacity > 0 && container.retina.linksWidth > 0) {
              this.drawLinkLine(linkParticle, link);
            }
          }
          context.restore();
        }
      }
      drawLinkTriangle(p1, link1, link2) {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const p2 = link1.destination;
        const p3 = link2.destination;
        const triangleOptions = p1.options.links.triangles;
        const opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        if (opacityTriangle <= 0) {
          return;
        }
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const pos3 = p3.getPosition();
        container.canvas.draw((ctx) => {
          if ((0, Utils_1.getDistance)(pos1, pos2) > container.retina.linksDistance || (0, Utils_1.getDistance)(pos3, pos2) > container.retina.linksDistance || (0, Utils_1.getDistance)(pos3, pos1) > container.retina.linksDistance) {
            return;
          }
          let colorTriangle = (0, Utils_1.colorToRgb)(triangleOptions.color);
          if (!colorTriangle) {
            const linksOptions = p1.options.links;
            const linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
            colorTriangle = (0, Utils_1.getLinkColor)(p1, p2, linkColor);
          }
          if (!colorTriangle) {
            return;
          }
          (0, Utils_1.drawLinkTriangle)(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
        });
      }
      drawLinkLine(p1, link) {
        const container = this.container;
        const options = container.actualOptions;
        const p2 = link.destination;
        let opacity = link.opacity;
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        container.canvas.draw((ctx) => {
          var _a, _b;
          let colorLine;
          const twinkle = p1.options.twinkle.lines;
          if (twinkle.enable) {
            const twinkleFreq = twinkle.frequency;
            const twinkleRgb = (0, Utils_1.colorToRgb)(twinkle.color);
            const twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== void 0) {
              colorLine = twinkleRgb;
              opacity = twinkle.opacity;
            }
          }
          if (!colorLine) {
            const linksOptions = p1.options.links;
            const linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
            colorLine = (0, Utils_1.getLinkColor)(p1, p2, linkColor);
          }
          if (!colorLine) {
            return;
          }
          const width = (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
          const maxDistance = (_b = p1.retina.linksDistance) !== null && _b !== void 0 ? _b : container.retina.linksDistance;
          (0, Utils_1.drawLinkLine)(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
        });
      }
    };
    exports.LinkInstance = LinkInstance;
  }
});

// node_modules/tsparticles/Interactions/Particles/Links/plugin.js
var require_plugin4 = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Links/plugin.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadPlugin = void 0;
    var LinkInstance_1 = require_LinkInstance();
    var Plugin = class {
      constructor() {
        this.id = "links";
      }
      getPlugin(container) {
        return new LinkInstance_1.LinkInstance(container);
      }
      needsPlugin() {
        return true;
      }
      loadOptions() {
      }
    };
    function loadPlugin(tsParticles) {
      const plugin = new Plugin();
      tsParticles.addPlugin(plugin);
    }
    exports.loadPlugin = loadPlugin;
  }
});

// node_modules/tsparticles/Interactions/Particles/Links/index.js
var require_Links2 = __commonJS({
  "node_modules/tsparticles/Interactions/Particles/Links/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadParticlesLinksInteraction = exports.loadInteraction = void 0;
    var Linker_1 = require_Linker();
    var plugin_1 = require_plugin4();
    function loadInteraction(tsParticles) {
      tsParticles.addInteractor("particlesLinks", (container) => new Linker_1.Linker(container));
    }
    exports.loadInteraction = loadInteraction;
    function loadParticlesLinksInteraction(tsParticles) {
      loadInteraction(tsParticles);
      (0, plugin_1.loadPlugin)(tsParticles);
    }
    exports.loadParticlesLinksInteraction = loadParticlesLinksInteraction;
  }
});

// node_modules/tsparticles/slim.js
var require_slim = __commonJS({
  "node_modules/tsparticles/slim.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSlim = void 0;
    var Circle_1 = require_Circle2();
    var Image_1 = require_Image();
    var Line_1 = require_Line();
    var Polygon_1 = require_Polygon();
    var Square_1 = require_Square();
    var Star_1 = require_Star();
    var Text_1 = require_Text();
    var Angle_1 = require_Angle();
    var Color_1 = require_Color();
    var Life_1 = require_Life2();
    var Opacity_1 = require_Opacity2();
    var Size_1 = require_Size2();
    var StrokeColor_1 = require_StrokeColor();
    var OutModes_1 = require_OutModes2();
    var Roll_1 = require_Roll2();
    var Tilt_1 = require_Tilt2();
    var Wobble_1 = require_Wobble2();
    var Attract_1 = require_Attract3();
    var Bounce_1 = require_Bounce3();
    var Bubble_1 = require_Bubble2();
    var Connect_1 = require_Connect2();
    var Grab_1 = require_Grab2();
    var Repulse_1 = require_Repulse3();
    var Trail_1 = require_Trail3();
    var Attract_2 = require_Attract4();
    var Collisions_1 = require_Collisions2();
    var Links_1 = require_Links2();
    function loadSlim(tsParticles) {
      (0, Attract_1.loadExternalAttractInteraction)(tsParticles);
      (0, Bounce_1.loadExternalBounceInteraction)(tsParticles);
      (0, Bubble_1.loadExternalBubbleInteraction)(tsParticles);
      (0, Connect_1.loadExternalConnectInteraction)(tsParticles);
      (0, Grab_1.loadExternalGrabInteraction)(tsParticles);
      (0, Repulse_1.loadExternalRepulseInteraction)(tsParticles);
      (0, Trail_1.loadExternalTrailInteraction)(tsParticles);
      (0, Attract_2.loadParticlesAttractInteraction)(tsParticles);
      (0, Collisions_1.loadParticlesCollisionsInteraction)(tsParticles);
      (0, Links_1.loadParticlesLinksInteraction)(tsParticles);
      (0, Circle_1.loadCircleShape)(tsParticles);
      (0, Image_1.loadImageShape)(tsParticles);
      (0, Line_1.loadLineShape)(tsParticles);
      (0, Polygon_1.loadPolygonShape)(tsParticles);
      (0, Square_1.loadSquareShape)(tsParticles);
      (0, Star_1.loadStarShape)(tsParticles);
      (0, Text_1.loadTextShape)(tsParticles);
      (0, Life_1.loadLifeUpdater)(tsParticles);
      (0, Opacity_1.loadOpacityUpdater)(tsParticles);
      (0, Size_1.loadSizeUpdater)(tsParticles);
      (0, Angle_1.loadAngleUpdater)(tsParticles);
      (0, Tilt_1.loadTiltUpdater)(tsParticles);
      (0, Roll_1.loadRollUpdater)(tsParticles);
      (0, Wobble_1.loadWobbleUpdater)(tsParticles);
      (0, Color_1.loadColorUpdater)(tsParticles);
      (0, StrokeColor_1.loadStrokeColorUpdater)(tsParticles);
      (0, OutModes_1.loadOutModesUpdater)(tsParticles);
    }
    exports.loadSlim = loadSlim;
  }
});

// node_modules/tsparticles/full.js
var require_full = __commonJS({
  "node_modules/tsparticles/full.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadFull = void 0;
    var plugin_1 = require_plugin();
    var plugin_2 = require_plugin2();
    var plugin_3 = require_plugin3();
    var slim_1 = require_slim();
    function loadFull(tsParticles) {
      (0, slim_1.loadSlim)(tsParticles);
      (0, plugin_1.loadAbsorbersPlugin)(tsParticles);
      (0, plugin_2.loadEmittersPlugin)(tsParticles);
      (0, plugin_3.loadPolygonMaskPlugin)(tsParticles);
    }
    exports.loadFull = loadFull;
  }
});

// node_modules/tsparticles/Types/RangeValue.js
var require_RangeValue = __commonJS({
  "node_modules/tsparticles/Types/RangeValue.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Types/RecursivePartial.js
var require_RecursivePartial = __commonJS({
  "node_modules/tsparticles/Types/RecursivePartial.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Types/ShapeData.js
var require_ShapeData = __commonJS({
  "node_modules/tsparticles/Types/ShapeData.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Types/ShapeDrawerFunctions.js
var require_ShapeDrawerFunctions = __commonJS({
  "node_modules/tsparticles/Types/ShapeDrawerFunctions.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Types/SingleOrMultiple.js
var require_SingleOrMultiple = __commonJS({
  "node_modules/tsparticles/Types/SingleOrMultiple.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Types/PathOptions.js
var require_PathOptions = __commonJS({
  "node_modules/tsparticles/Types/PathOptions.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Types/index.js
var require_Types2 = __commonJS({
  "node_modules/tsparticles/Types/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_RangeValue(), exports);
    __exportStar(require_RecursivePartial(), exports);
    __exportStar(require_ShapeData(), exports);
    __exportStar(require_ShapeDrawerFunctions(), exports);
    __exportStar(require_SingleOrMultiple(), exports);
    __exportStar(require_PathOptions(), exports);
  }
});

// node_modules/tsparticles/Core/Interfaces/Colors.js
var require_Colors = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/Colors.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/Gradients.js
var require_Gradients = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/Gradients.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IAttract.js
var require_IAttract = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IAttract.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IBounds.js
var require_IBounds = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IBounds.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IBubble.js
var require_IBubble = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IBubble.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IBubbleParticleData.js
var require_IBubbleParticleData = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IBubbleParticleData.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/ICircleBouncer.js
var require_ICircleBouncer = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/ICircleBouncer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IContainerInteractivity.js
var require_IContainerInteractivity = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IContainerInteractivity.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IContainerPlugin.js
var require_IContainerPlugin = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IContainerPlugin.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/ICoordinates.js
var require_ICoordinates = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/ICoordinates.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IDelta.js
var require_IDelta = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IDelta.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IDimension.js
var require_IDimension = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IDimension.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IDistance.js
var require_IDistance = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IDistance.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IExternalInteractor.js
var require_IExternalInteractor = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IExternalInteractor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IInteractor.js
var require_IInteractor = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IInteractor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IMouseData.js
var require_IMouseData = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IMouseData.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IMovePathGenerator.js
var require_IMovePathGenerator = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IMovePathGenerator.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticle.js
var require_IParticle = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticle.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleGradientAnimation.js
var require_IParticleGradientAnimation = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleGradientAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleGradientColorAnimation.js
var require_IParticleGradientColorAnimation = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleGradientColorAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleHslAnimation.js
var require_IParticleHslAnimation = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleHslAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleLife.js
var require_IParticleLife = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleLife.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleLoops.js
var require_IParticleLoops = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleLoops.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleRetinaProps.js
var require_IParticleRetinaProps = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleRetinaProps.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleSpin.js
var require_IParticleSpin = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleSpin.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleUpdater.js
var require_IParticleUpdater = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleUpdater.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticleValueAnimation.js
var require_IParticleValueAnimation = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticleValueAnimation.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IParticlesInteractor.js
var require_IParticlesInteractor = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IParticlesInteractor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IPlugin.js
var require_IPlugin = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IPlugin.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IRangeValue.js
var require_IRangeValue = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IRangeValue.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IRectSideResult.js
var require_IRectSideResult = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IRectSideResult.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IRepulse.js
var require_IRepulse = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IRepulse.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IShapeDrawer.js
var require_IShapeDrawer = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IShapeDrawer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/IShapeValues.js
var require_IShapeValues = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/IShapeValues.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/tsparticles/Core/Interfaces/index.js
var require_Interfaces = __commonJS({
  "node_modules/tsparticles/Core/Interfaces/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_Colors(), exports);
    __exportStar(require_Gradients(), exports);
    __exportStar(require_IAttract(), exports);
    __exportStar(require_IBounds(), exports);
    __exportStar(require_IBubble(), exports);
    __exportStar(require_IBubbleParticleData(), exports);
    __exportStar(require_ICircleBouncer(), exports);
    __exportStar(require_IContainerInteractivity(), exports);
    __exportStar(require_IContainerPlugin(), exports);
    __exportStar(require_ICoordinates(), exports);
    __exportStar(require_IDelta(), exports);
    __exportStar(require_IDimension(), exports);
    __exportStar(require_IDistance(), exports);
    __exportStar(require_IExternalInteractor(), exports);
    __exportStar(require_IInteractor(), exports);
    __exportStar(require_IMouseData(), exports);
    __exportStar(require_IMovePathGenerator(), exports);
    __exportStar(require_IParticle(), exports);
    __exportStar(require_IParticleGradientAnimation(), exports);
    __exportStar(require_IParticleGradientColorAnimation(), exports);
    __exportStar(require_IParticleHslAnimation(), exports);
    __exportStar(require_IParticleLife(), exports);
    __exportStar(require_IParticleLoops(), exports);
    __exportStar(require_IParticleRetinaProps(), exports);
    __exportStar(require_IParticleSpin(), exports);
    __exportStar(require_IParticleUpdater(), exports);
    __exportStar(require_IParticleValueAnimation(), exports);
    __exportStar(require_IParticlesInteractor(), exports);
    __exportStar(require_IPlugin(), exports);
    __exportStar(require_IRangeValue(), exports);
    __exportStar(require_IRectSideResult(), exports);
    __exportStar(require_IRepulse(), exports);
    __exportStar(require_IShapeDrawer(), exports);
    __exportStar(require_IShapeValues(), exports);
  }
});

// node_modules/tsparticles/index.js
var require_tsparticles = __commonJS({
  "node_modules/tsparticles/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.loadFull = exports.Main = exports.Rectangle = exports.Point = exports.Constants = exports.CircleWarp = exports.Circle = void 0;
    var pjs_1 = require_pjs();
    var main_1 = require_main();
    Object.defineProperty(exports, "Main", { enumerable: true, get: function() {
      return main_1.Main;
    } });
    var Utils_1 = require_Utils2();
    Object.defineProperty(exports, "Circle", { enumerable: true, get: function() {
      return Utils_1.Circle;
    } });
    Object.defineProperty(exports, "CircleWarp", { enumerable: true, get: function() {
      return Utils_1.CircleWarp;
    } });
    Object.defineProperty(exports, "Constants", { enumerable: true, get: function() {
      return Utils_1.Constants;
    } });
    Object.defineProperty(exports, "Point", { enumerable: true, get: function() {
      return Utils_1.Point;
    } });
    Object.defineProperty(exports, "Rectangle", { enumerable: true, get: function() {
      return Utils_1.Rectangle;
    } });
    var full_1 = require_full();
    Object.defineProperty(exports, "loadFull", { enumerable: true, get: function() {
      return full_1.loadFull;
    } });
    var tsParticles = new main_1.Main();
    exports.tsParticles = tsParticles;
    tsParticles.init();
    (0, full_1.loadFull)(tsParticles);
    var { particlesJS, pJSDom } = (0, pjs_1.initPjs)(tsParticles);
    exports.particlesJS = particlesJS;
    exports.pJSDom = pJSDom;
    __exportStar(require_Vector(), exports);
    __exportStar(require_Container(), exports);
    __exportStar(require_Enums(), exports);
    __exportStar(require_Enums2(), exports);
    __exportStar(require_Enums3(), exports);
    __exportStar(require_Enums4(), exports);
    __exportStar(require_CanvasUtils(), exports);
    __exportStar(require_ColorUtils(), exports);
    __exportStar(require_NumberUtils(), exports);
    __exportStar(require_Utils(), exports);
    __exportStar(require_Types2(), exports);
    __exportStar(require_Interfaces(), exports);
    __exportStar(require_Particle(), exports);
    __exportStar(require_ExternalInteractorBase(), exports);
    __exportStar(require_ParticlesInteractorBase(), exports);
  }
});

// node_modules/fast-deep-equal/react.js
var require_react2 = __commonJS({
  "node_modules/fast-deep-equal/react.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          }
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/react-tsparticles/cjs/particles.js
var require_particles = __commonJS({
  "node_modules/react-tsparticles/cjs/particles.js"(exports) {
    init_react();
    (() => {
      "use strict";
      var e = { 904: (e2, t2, o2) => {
        o2.d(t2, { Z: () => v });
        const r2 = require_react();
        var n2 = o2.n(r2);
        const i2 = require_tsparticles(), a = require_react2();
        var c = o2.n(a);
        function l(e3) {
          return (l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function u(e3, t3) {
          for (var o3 = 0; o3 < t3.length; o3++) {
            var r3 = t3[o3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
          }
        }
        function s(e3, t3, o3) {
          return (s = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(e4, t4, o4) {
            var r3 = function(e5, t5) {
              for (; !Object.prototype.hasOwnProperty.call(e5, t5) && (e5 = f(e5)) !== null; )
                ;
              return e5;
            }(e4, t4);
            if (r3) {
              var n3 = Object.getOwnPropertyDescriptor(r3, t4);
              return n3.get ? n3.get.call(o4) : n3.value;
            }
          })(e3, t3, o3 || e3);
        }
        function d(e3, t3) {
          return (d = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function p(e3, t3) {
          if (t3 && (l(t3) === "object" || typeof t3 == "function"))
            return t3;
          if (t3 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(e4) {
            if (e4 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e4;
          }(e3);
        }
        function f(e3) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        var v = function(e3) {
          !function(e4, t4) {
            if (typeof t4 != "function" && t4 !== null)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t4 && d(e4, t4);
          }(v2, e3);
          var t3, o3, r3, a2, l2 = (r3 = v2, a2 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t4 = f(r3);
            if (a2) {
              var o4 = f(this).constructor;
              e4 = Reflect.construct(t4, arguments, o4);
            } else
              e4 = t4.apply(this, arguments);
            return p(this, e4);
          });
          function v2(e4) {
            var t4;
            return function(e5, t5) {
              if (!(e5 instanceof t5))
                throw new TypeError("Cannot call a class as a function");
            }(this, v2), (t4 = l2.call(this, e4)).state = { library: void 0 }, t4;
          }
          return t3 = v2, (o3 = [{ key: "destroy", value: function() {
            this.state.library && (this.state.library.destroy(), this.setState({ library: void 0 }));
          } }, { key: "shouldComponentUpdate", value: function(e4) {
            return !c()(e4, this.props);
          } }, { key: "componentDidUpdate", value: function() {
            this.refresh();
          } }, { key: "forceUpdate", value: function() {
            this.refresh(), s(f(v2.prototype), "forceUpdate", this).call(this);
          } }, { key: "componentDidMount", value: function() {
            this.props.init && this.props.init(i2.tsParticles), this.loadParticles();
          } }, { key: "componentWillUnmount", value: function() {
            this.destroy();
          } }, { key: "render", value: function() {
            var e4 = this.props, t4 = e4.width, o4 = e4.height, r4 = e4.className, i3 = e4.canvasClassName, a3 = e4.id;
            return n2().createElement("div", { className: r4, id: a3 }, n2().createElement("canvas", { className: i3, style: Object.assign(Object.assign({}, this.props.style), { width: t4, height: o4 }) }));
          } }, { key: "refresh", value: function() {
            this.destroy(), this.loadParticles();
          } }, { key: "loadParticles", value: function() {
            var e4, t4 = this, o4 = function(e5) {
              t4.props.container && (t4.props.container.current = e5), t4.setState({ library: e5 }), t4.props.loaded && t4.props.loaded(e5);
            };
            this.props.url ? i2.tsParticles.loadJSON(this.props.id, this.props.url).then(o4) : i2.tsParticles.load(this.props.id, (e4 = this.props.params) !== null && e4 !== void 0 ? e4 : this.props.options).then(o4);
          } }]) && u(t3.prototype, o3), v2;
        }(r2.Component);
        v.defaultProps = { width: "100%", height: "100%", options: {}, style: {}, url: void 0, id: "tsparticles" };
      }, 868: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.AnimationStatus = void 0, (o2 = t2.AnimationStatus || (t2.AnimationStatus = {}))[o2.increasing = 0] = "increasing", o2[o2.decreasing = 1] = "decreasing";
      }, 300: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.MoveDirection = void 0, (o2 = t2.MoveDirection || (t2.MoveDirection = {})).bottom = "bottom", o2.bottomLeft = "bottom-left", o2.bottomRight = "bottom-right", o2.left = "left", o2.none = "none", o2.right = "right", o2.top = "top", o2.topLeft = "top-left", o2.topRight = "top-right";
      }, 264: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OutModeDirection = void 0, (o2 = t2.OutModeDirection || (t2.OutModeDirection = {})).bottom = "bottom", o2.left = "left", o2.right = "right", o2.top = "top";
      }, 329: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RotateDirection = void 0, (o2 = t2.RotateDirection || (t2.RotateDirection = {})).clockwise = "clockwise", o2.counterClockwise = "counter-clockwise", o2.random = "random";
      }, 469: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TiltDirection = void 0, (o2 = t2.TiltDirection || (t2.TiltDirection = {})).clockwise = "clockwise", o2.counterClockwise = "counter-clockwise", o2.random = "random";
      }, 961: function(e2, t2, o2) {
        var r2 = this && this.__createBinding || (Object.create ? function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), Object.defineProperty(e3, r3, { enumerable: true, get: function() {
            return t3[o3];
          } });
        } : function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), e3[r3] = t3[o3];
        }), n2 = this && this.__exportStar || function(e3, t3) {
          for (var o3 in e3)
            o3 === "default" || Object.prototype.hasOwnProperty.call(t3, o3) || r2(t3, e3, o3);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), n2(o2(300), t2), n2(o2(329), t2), n2(o2(264), t2), n2(o2(469), t2);
      }, 974: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.InteractivityDetect = void 0, (o2 = t2.InteractivityDetect || (t2.InteractivityDetect = {})).canvas = "canvas", o2.parent = "parent", o2.window = "window";
      }, 252: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ClickMode = void 0, (o2 = t2.ClickMode || (t2.ClickMode = {})).attract = "attract", o2.bubble = "bubble", o2.push = "push", o2.remove = "remove", o2.repulse = "repulse", o2.pause = "pause", o2.trail = "trail";
      }, 130: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CollisionMode = void 0, (o2 = t2.CollisionMode || (t2.CollisionMode = {})).absorb = "absorb", o2.bounce = "bounce", o2.destroy = "destroy";
      }, 330: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DestroyMode = void 0, (o2 = t2.DestroyMode || (t2.DestroyMode = {})).none = "none", o2.split = "split";
      }, 208: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DivMode = void 0, (o2 = t2.DivMode || (t2.DivMode = {})).bounce = "bounce", o2.bubble = "bubble", o2.repulse = "repulse";
      }, 349: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.HoverMode = void 0, (o2 = t2.HoverMode || (t2.HoverMode = {})).attract = "attract", o2.bounce = "bounce", o2.bubble = "bubble", o2.connect = "connect", o2.grab = "grab", o2.light = "light", o2.repulse = "repulse", o2.slow = "slow", o2.trail = "trail";
      }, 581: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OutMode = void 0, (o2 = t2.OutMode || (t2.OutMode = {})).bounce = "bounce", o2.bounceHorizontal = "bounce-horizontal", o2.bounceVertical = "bounce-vertical", o2.none = "none", o2.out = "out", o2.destroy = "destroy", o2.split = "split";
      }, 667: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RollMode = void 0, (o2 = t2.RollMode || (t2.RollMode = {})).both = "both", o2.horizontal = "horizontal", o2.vertical = "vertical";
      }, 855: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SizeMode = void 0, (o2 = t2.SizeMode || (t2.SizeMode = {})).precise = "precise", o2.percent = "percent";
      }, 702: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemeMode = void 0, (o2 = t2.ThemeMode || (t2.ThemeMode = {})).any = "any", o2.dark = "dark", o2.light = "light";
      }, 515: function(e2, t2, o2) {
        var r2 = this && this.__createBinding || (Object.create ? function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), Object.defineProperty(e3, r3, { enumerable: true, get: function() {
            return t3[o3];
          } });
        } : function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), e3[r3] = t3[o3];
        }), n2 = this && this.__exportStar || function(e3, t3) {
          for (var o3 in e3)
            o3 === "default" || Object.prototype.hasOwnProperty.call(t3, o3) || r2(t3, e3, o3);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), n2(o2(252), t2), n2(o2(330), t2), n2(o2(208), t2), n2(o2(349), t2), n2(o2(130), t2), n2(o2(581), t2), n2(o2(667), t2), n2(o2(855), t2), n2(o2(702), t2);
      }, 47: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.AlterType = void 0, (o2 = t2.AlterType || (t2.AlterType = {})).darken = "darken", o2.enlighten = "enlighten";
      }, 64: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DestroyType = void 0, (o2 = t2.DestroyType || (t2.DestroyType = {})).none = "none", o2.max = "max", o2.min = "min";
      }, 712: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DivType = void 0, (o2 = t2.DivType || (t2.DivType = {})).circle = "circle", o2.rectangle = "rectangle";
      }, 77: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EasingType = void 0, (o2 = t2.EasingType || (t2.EasingType = {})).easeOutBack = "ease-out-back", o2.easeOutCirc = "ease-out-circ", o2.easeOutCubic = "ease-out-cubic", o2.easeOutQuad = "ease-out-quad", o2.easeOutQuart = "ease-out-quart", o2.easeOutQuint = "ease-out-quint", o2.easeOutExpo = "ease-out-expo", o2.easeOutSine = "ease-out-sine";
      }, 589: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.GradientType = void 0, (o2 = t2.GradientType || (t2.GradientType = {})).linear = "linear", o2.radial = "radial", o2.random = "random";
      }, 457: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.InteractorType = void 0, (o2 = t2.InteractorType || (t2.InteractorType = {}))[o2.External = 0] = "External", o2[o2.Particles = 1] = "Particles";
      }, 796: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OrbitType = void 0, (o2 = t2.OrbitType || (t2.OrbitType = {})).front = "front", o2.back = "back";
      }, 247: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ShapeType = void 0, (o2 = t2.ShapeType || (t2.ShapeType = {})).char = "char", o2.character = "character", o2.circle = "circle", o2.edge = "edge", o2.image = "image", o2.images = "images", o2.line = "line", o2.polygon = "polygon", o2.square = "square", o2.star = "star", o2.triangle = "triangle";
      }, 676: (e2, t2) => {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.StartValueType = void 0, (o2 = t2.StartValueType || (t2.StartValueType = {})).max = "max", o2.min = "min", o2.random = "random";
      }, 799: function(e2, t2, o2) {
        var r2 = this && this.__createBinding || (Object.create ? function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), Object.defineProperty(e3, r3, { enumerable: true, get: function() {
            return t3[o3];
          } });
        } : function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), e3[r3] = t3[o3];
        }), n2 = this && this.__exportStar || function(e3, t3) {
          for (var o3 in e3)
            o3 === "default" || Object.prototype.hasOwnProperty.call(t3, o3) || r2(t3, e3, o3);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), n2(o2(47), t2), n2(o2(64), t2), n2(o2(589), t2), n2(o2(457), t2), n2(o2(247), t2), n2(o2(676), t2), n2(o2(712), t2), n2(o2(77), t2), n2(o2(796), t2);
      }, 717: function(e2, t2, o2) {
        var r2 = this && this.__createBinding || (Object.create ? function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), Object.defineProperty(e3, r3, { enumerable: true, get: function() {
            return t3[o3];
          } });
        } : function(e3, t3, o3, r3) {
          r3 === void 0 && (r3 = o3), e3[r3] = t3[o3];
        }), n2 = this && this.__exportStar || function(e3, t3) {
          for (var o3 in e3)
            o3 === "default" || Object.prototype.hasOwnProperty.call(t3, o3) || r2(t3, e3, o3);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), n2(o2(961), t2), n2(o2(515), t2), n2(o2(868), t2), n2(o2(799), t2), n2(o2(974), t2);
      } }, t = {};
      function o(r2) {
        var n2 = t[r2];
        if (n2 !== void 0)
          return n2.exports;
        var i2 = t[r2] = { exports: {} };
        return e[r2].call(i2.exports, i2, i2.exports, o), i2.exports;
      }
      o.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return o.d(t2, { a: t2 }), t2;
      }, o.d = (e2, t2) => {
        for (var r2 in t2)
          o.o(t2, r2) && !o.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, o.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), o.r = (e2) => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      (() => {
        o.r(r), o.d(r, { default: () => i2, Particles: () => e2.Z });
        var e2 = o(904), t2 = o(717), n2 = {};
        for (const e3 in t2)
          ["default", "Particles"].indexOf(e3) < 0 && (n2[e3] = () => t2[e3]);
        o.d(r, n2);
        const i2 = e2.Z;
      })();
      var n = exports;
      for (var i in r)
        n[i] = r[i];
      r.__esModule && Object.defineProperty(n, "__esModule", { value: true });
    })();
  }
});

// node_modules/react-tsparticles/index.js
var require_react_tsparticles = __commonJS({
  "node_modules/react-tsparticles/index.js"(exports, module) {
    init_react();
    var ReactParticles = require_particles();
    for (let key in ReactParticles) {
      ReactParticles.default[key] = ReactParticles[key];
    }
    module.exports = ReactParticles.default;
  }
});

// browser-route-module:/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react3 = __toESM(require_react());
var import_react_tsparticles = __toESM(require_react_tsparticles());

// app/common/hooks/motion/index.ts
init_react();

// app/common/hooks/motion/useReducedMotion.ts
init_react();
var import_react = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== void 0 ? import_react.useLayoutEffect : import_react.useEffect;
var useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react.useState)(false);
  useIsomorphicLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
    }
    mediaQuery.addEventListener("change", () => {
      setPrefersReducedMotion(mediaQuery.matches);
    });
    return () => mediaQuery.removeEventListener("change", () => null);
  }, []);
  return prefersReducedMotion;
};

// app/routes/hero/index.ts
init_react();

// app/routes/hero/hero.tsx
init_react();

// app/routes/hero/animated-hello.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/routes/hero/languages.ts
init_react();
var helloInLanguages = [
  "Hi",
  "Bonjour",
  "Ol\xE1",
  "Hola",
  "\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435",
  "Kamusta",
  "Aloha",
  "Hall\xF3",
  "\u0645\u0631\u062D\u0628\u0627",
  "Ahoj",
  "Ciao",
  "\u3053\u3093\u306B\u3061\u306F",
  "\u4F60\u597D",
  "\u03A7\u03B1\u03AF\u03C1\u03B5\u03C4\u03B5",
  "\u05E9\u05DC\u05D5\u05DD",
  "\u0939\u0948\u0932\u094B",
  "\u0421\u0430\u0439\u043D \u0443\u0443",
  "\u041F\u0440\u0438\u0432\u0435\u0442",
  "Hall\xE5",
  "xin ch\xE0o"
];

// app/routes/hero/animated-hello.tsx
var AnimatedHello = () => {
  const valueRef = (0, import_react2.useRef)(null);
  const [items] = (0, import_react2.useState)(helloInLanguages.map((hi) => ({ value: hi, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map((v) => v.value));
  const [index, setIndex] = (0, import_react2.useState)(0);
  const [length, setLength] = (0, import_react2.useState)(helloInLanguages[index].length);
  const transitions = useTransition(index, {
    from: { opacity: 0, width: "max-content" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 60, friction: 10 }
  });
  const { left } = useSpring({
    from: {
      left: 0
    },
    to: {
      left: length + 12
    },
    config: {
      tension: 110,
      friction: 30,
      mass: 4,
      bounce: 1
    }
  });
  (0, import_react2.useEffect)(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % helloInLanguages.length);
    }, 1e3 * 2);
    return () => clearInterval(interval);
  }, []);
  (0, import_react2.useEffect)(() => {
    var _a;
    setLength(((_a = valueRef.current) == null ? void 0 : _a.clientWidth) || helloInLanguages.length);
  }, [index]);
  return /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "absolute"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "relative"
  }, transitions((styles, i) => /* @__PURE__ */ import_react2.default.createElement(animated.span, {
    ref: valueRef,
    style: { ...styles, position: "absolute" }
  }, items[i], ",")), /* @__PURE__ */ import_react2.default.createElement(animated.span, {
    key: length,
    style: {
      position: "absolute",
      left
    }
  }, "I'm")));
};

// app/routes/hero/hero.tsx
var Hero = () => {
  const [mode] = useTheme();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center fixed w-90 top-2/4 left-[25vw] z-30 translate-y-[-60%] h-max"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-accent dark:text-theme-white text-theme-black relative"
  }, /* @__PURE__ */ React.createElement(AnimatedHello, null), /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold dark:text-theme-lteal2 text-theme-dteal pt-4 mt-[48px]"
  }, "Kevin Carlos")), /* @__PURE__ */ React.createElement(Divider, {
    className: "my-6",
    orientation: "horizontal"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "space-x-6"
  }, /* @__PURE__ */ React.createElement(PillButton, {
    to: links.aboutMe(),
    className: "bg-theme-lteal2 dark:bg-theme-lteal hover:!text-theme-white hover:!bg-theme-dteal"
  }, "About Me"), /* @__PURE__ */ React.createElement(PillButton, {
    to: links.projects().root(),
    className: "bg-theme-lgray dark:bg-theme-dgray hover:!text-theme-white hover:!bg-theme-blue"
  }, "Projects")));
};

// app/routes/index.tsx
function Index() {
  const prefersReducedMotion = useReducedMotion();
  const [mode] = useTheme();
  const getParticleOptions = (0, import_react3.useCallback)((mode2) => {
    const opts = {
      fpsLimit: 60,
      detectRetina: true,
      retina_detect: true,
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            quantity: 4
          },
          remove: {
            quantity: 2
          }
        }
      },
      particles: {
        number: {
          value: 27,
          density: {
            enable: true,
            area: 789
          }
        },
        color: {
          value: mode2 === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"
        },
        shape: {
          type: "circle",
          options: {
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            },
            polygon: {
              nb_sides: 7
            }
          }
        },
        opacity: {
          value: 0.7,
          animation: {
            enable: false,
            minimumValue: 0.1,
            sync: false,
            speed: 1
          }
        },
        size: {
          value: 3,
          random: {
            enable: true,
            minimumValue: 1
          },
          animation: {
            enable: true,
            speed: 2.4,
            minimumValue: 0.1,
            sync: true
          }
        },
        links: {
          enable: true,
          distance: 177,
          color: mode2 === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
          opacity: 0.5,
          width: 1
        },
        move: {
          enable: true,
          speed: 2.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
            bottom: "bounce",
            left: "bounce",
            right: "bounce",
            top: "bounce"
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      }
    };
    return opts;
  }, [mode]);
  return /* @__PURE__ */ React.createElement(Layout, {
    hideFooter: true
  }, /* @__PURE__ */ React.createElement(Hero, null), !prefersReducedMotion ? /* @__PURE__ */ React.createElement(import_react_tsparticles.default, {
    id: "tsparticles-home-bg",
    options: getParticleOptions(mode),
    style: {
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      height: "100vh",
      zIndex: 20
    }
  }) : null);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-2G36Z5AO.js.map
