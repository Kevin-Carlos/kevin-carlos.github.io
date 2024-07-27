import {
  __esm,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-N2P4UVFW.js";

// node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js
var init_extends = __esm({
  "node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js"() {
    init_react();
  }
});

// node_modules/history/index.js
function I(b2) {
  var h2 = b2.pathname;
  h2 = h2 === void 0 ? "/" : h2;
  var e2 = b2.search;
  e2 = e2 === void 0 ? "" : e2;
  b2 = b2.hash;
  b2 = b2 === void 0 ? "" : b2;
  e2 && e2 !== "?" && (h2 += e2.charAt(0) === "?" ? e2 : "?" + e2);
  b2 && b2 !== "#" && (h2 += b2.charAt(0) === "#" ? b2 : "#" + b2);
  return h2;
}
function J(b2) {
  var h2 = {};
  if (b2) {
    var e2 = b2.indexOf("#");
    0 <= e2 && (h2.hash = b2.substr(e2), b2 = b2.substr(0, e2));
    e2 = b2.indexOf("?");
    0 <= e2 && (h2.search = b2.substr(e2), b2 = b2.substr(0, e2));
    b2 && (h2.pathname = b2);
  }
  return h2;
}
var r, B;
var init_history = __esm({
  "node_modules/history/index.js"() {
    init_react();
    init_extends();
    B = r || (r = {});
    B.Pop = "POP";
    B.Push = "PUSH";
    B.Replace = "REPLACE";
  }
});

// node_modules/react-router-dom/node_modules/react-router/index.js
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning2(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    true ? warning2(false, message) : void 0;
  }
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location2 = typeof locationArg === "string" ? J(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(branches[i2], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? true ? invariant(false, 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? true ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true ? warning2(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true ? warning2(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? J(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? J(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
function useHref(to) {
  !useInRouterContext() ? true ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? true ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? true ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react.useCallback)(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning2(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
function useOutlet(context) {
  let outlet = (0, import_react.useContext)(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ (0, import_react.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? true ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = (0, import_react.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location2;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? J(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  if (true) {
    true ? warning2(parentRoute || matches != null, 'No routes matched location "' + location2.pathname + location2.search + location2.hash + '" ') : void 0;
    true ? warning2(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location2.pathname + location2.search + location2.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index) => {
    return /* @__PURE__ */ (0, import_react.createElement)(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = r.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = J(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location2 = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning2(location2 != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location: location2,
      navigationType
    }
  }));
}
var import_react, NavigationContext, LocationContext, RouteContext, alreadyWarned, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash, OutletContext;
var init_react_router = __esm({
  "node_modules/react-router-dom/node_modules/react-router/index.js"() {
    init_react();
    init_history();
    init_history();
    import_react = __toESM(require_react());
    NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (true) {
      NavigationContext.displayName = "Navigation";
    }
    LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (true) {
      LocationContext.displayName = "Location";
    }
    RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
      outlet: null,
      matches: []
    });
    if (true) {
      RouteContext.displayName = "Route";
    }
    alreadyWarned = {};
    paramRe = /^:\w+$/;
    dynamicSegmentValue = 3;
    indexRouteValue = 2;
    emptySegmentValue = 1;
    staticSegmentValue = 10;
    splatPenalty = -2;
    isSplat = (s2) => s2 === "*";
    joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    OutletContext = /* @__PURE__ */ (0, import_react.createContext)(null);
  }
});

// node_modules/react-router-dom/index.js
function _extends4() {
  _extends4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return /* @__PURE__ */ (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to);
  return (0, import_react2.useCallback)((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || I(location2) === I(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location2, navigate, path, replaceProp, state, target, to]);
}
var import_react2, _excluded, _excluded2, Link, NavLink;
var init_react_router_dom = __esm({
  "node_modules/react-router-dom/index.js"() {
    init_react();
    import_react2 = __toESM(require_react());
    init_react_router();
    init_react_router();
    _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
    _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    if (true) {
      HistoryRouter.displayName = "unstable_HistoryRouter";
    }
    Link = /* @__PURE__ */ (0, import_react2.forwardRef)(function LinkWithRef(_ref4, ref) {
      let {
        onClick,
        reloadDocument,
        replace = false,
        state,
        target,
        to
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
      let href = useHref(to);
      let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented && !reloadDocument) {
          internalOnClick(event);
        }
      }
      return /* @__PURE__ */ (0, import_react2.createElement)("a", _extends4({}, rest, {
        href,
        onClick: handleClick,
        ref,
        target
      }));
    });
    if (true) {
      Link.displayName = "Link";
    }
    NavLink = /* @__PURE__ */ (0, import_react2.forwardRef)(function NavLinkWithRef(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
      let location2 = useLocation();
      let path = useResolvedPath(to);
      let locationPathname = location2.pathname;
      let toPathname = path.pathname;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        toPathname = toPathname.toLowerCase();
      }
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp({
          isActive
        });
      } else {
        className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp({
        isActive
      }) : styleProp;
      return /* @__PURE__ */ (0, import_react2.createElement)(Link, _extends4({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to
      }), typeof children === "function" ? children({
        isActive
      }) : children);
    });
    if (true) {
      NavLink.displayName = "NavLink";
    }
  }
});

// node_modules/@remix-run/react/dist/esm/browser.js
init_react();

// node_modules/@remix-run/react/node_modules/history/index.js
init_react();

// node_modules/@remix-run/react/node_modules/@babel/runtime/helpers/esm/extends.js
init_react();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@remix-run/react/node_modules/history/index.js
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = true ? function(obj) {
  return Object.freeze(obj);
} : function(obj) {
  return obj;
};
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
var BeforeUnloadEventType = "beforeunload";
var PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$window = _options.window, window2 = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window2.history;
  function getIndexAndLocation() {
    var _window$location = window2.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          true ? warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.") : void 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window2.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;
  var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location2 = _getIndexAndLocation2[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function createHref2(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends({
      pathname: location2.pathname,
      hash: "",
      search: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index2) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index2
    }, createHref2(nextLocation)];
  }
  function allowTx(action2, location3, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location3,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation3 = getIndexAndLocation();
    index = _getIndexAndLocation3[0];
    location2 = _getIndexAndLocation3[1];
    listeners.call({
      action,
      location: location2
    });
  }
  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      push(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window2.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      replace(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location2;
    },
    createHref: createHref2,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window2.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window2.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function promptBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}
function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },
    push: function push(fn) {
      handlers.push(fn);
      return function() {
        handlers = handlers.filter(function(handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function(fn) {
        return fn && fn(arg);
      });
    }
  };
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}

// node_modules/@remix-run/react/dist/esm/browser.js
var React4 = __toESM(require_react());

// node_modules/@remix-run/react/dist/esm/components.js
init_react();

// node_modules/@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// node_modules/@remix-run/react/dist/esm/components.js
var React3 = __toESM(require_react());
init_react_router_dom();

// node_modules/@remix-run/react/dist/esm/errorBoundaries.js
init_react();
var import_react3 = __toESM(require_react());
var RemixErrorBoundary = class extends import_react3.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error || null,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ import_react3.default.createElement(this.props.component, {
        error: this.state.error
      });
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ import_react3.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
var RemixCatchContext = /* @__PURE__ */ import_react3.default.createContext(void 0);
function useCatch() {
  return (0, import_react3.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  if (catchVal) {
    return /* @__PURE__ */ import_react3.default.createElement(RemixCatchContext.Provider, {
      value: catchVal
    }, /* @__PURE__ */ import_react3.default.createElement(Component, null));
  }
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/dist/esm/invariant.js
init_react();
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
init_react();

// node_modules/@remix-run/react/dist/esm/routeModules.js
init_react();
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null)
    return false;
  if (object.href == null) {
    return object.rel === "preload" && (typeof object.imageSrcSet === "string" || typeof object.imagesrcset === "string") && (typeof object.imageSizes === "string" || typeof object.imagesizes === "string");
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  let links = await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }));
  return links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? {
    ...link,
    rel: "prefetch"
  } : {
    ...link,
    rel: "prefetch",
    as: "style"
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location2, mode) {
  let path = parsePathPatch(page);
  let isNew = (match, index) => {
    if (!currentMatches[index])
      return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  let newMatches = mode === "data" && location2.search !== path.search ? nextMatches.filter((match, index) => {
    if (!match.route.hasLoader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      return match.route.shouldReload({
        params: match.params,
        prevUrl: new URL(location2.pathname + location2.search + location2.hash, window.origin),
        url: new URL(page, window.origin)
      });
    }
    return true;
  }) : nextMatches.filter((match, index) => {
    return (mode === "assets" || match.route.hasLoader) && (isNew(match, index) || matchPathChanged(match, index));
  });
  return newMatches;
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path;
    let searchParams = new URLSearchParams(search);
    searchParams.set("_data", match.route.id);
    return `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let str = JSON.stringify(descriptor);
    if (!set.has(str)) {
      set.add(str);
      deduped.push(descriptor);
    }
    return deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  if (path.search === void 0)
    path.search = "";
  return path;
}

// node_modules/@remix-run/react/dist/esm/markup.js
init_react();
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/dist/esm/routes.js
init_react();
var React2 = __toESM(require_react());

// node_modules/@remix-run/react/dist/esm/data.js
init_react();
function isCatchResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url, routeId, signal, submission) {
  url.searchParams.set("_data", routeId);
  let init = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  };
  let response = await fetch(url.href, init);
  if (isErrorResponse(response)) {
    let data = await response.json();
    let error = new Error(data.message);
    error.stack = data.stack;
    return error;
  }
  return response;
}
async function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission;
  let headers = void 0;
  let body = formData;
  if (encType === "application/x-www-form-urlencoded") {
    body = new URLSearchParams();
    for (let [key, value] of formData) {
      invariant2(typeof value === "string", `File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.`);
      body.append(key, value);
    }
    headers = {
      "Content-Type": encType
    };
  }
  return {
    method,
    body,
    signal,
    credentials: "same-origin",
    headers
  };
}

// node_modules/@remix-run/react/dist/esm/transition.js
init_react();

// node_modules/@remix-run/react/dist/esm/routeMatching.js
init_react();
init_react_router_dom();
function matchClientRoutes(routes, location2) {
  let matches = matchRoutes(routes, location2);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

// node_modules/@remix-run/react/dist/esm/transition.js
var CatchValue = class {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
};
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location2) {
  return Boolean(location2.state) && location2.state.isRedirect;
}
function isLoaderRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "loader";
}
function isActionRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "action";
}
function isFetchActionRedirect(location2) {
  return isRedirectLocation(location2) && location2.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "loaderSubmission";
}
var TransitionRedirect = class {
  constructor(location2, setCookie) {
    this.setCookie = setCookie;
    this.location = typeof location2 === "string" ? location2 : location2.pathname + location2.search;
  }
};
var IDLE_TRANSITION = {
  state: "idle",
  submission: void 0,
  location: void 0,
  type: "idle"
};
var IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: void 0,
  submission: void 0
};
function createTransitionManager(init) {
  let {
    routes
  } = init;
  let pendingNavigationController;
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let navigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let matches = matchClientRoutes(routes, init.location);
  if (!matches) {
    matches = [{
      params: {},
      pathname: "",
      route: routes[0]
    }];
  }
  let state = {
    location: init.location,
    loaderData: init.loaderData || {},
    actionData: init.actionData,
    catch: init.catch,
    error: init.error,
    catchBoundaryId: init.catchBoundaryId || null,
    errorBoundaryId: init.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: /* @__PURE__ */ new Map()
  };
  function update(updates) {
    if (updates.transition) {
      if (updates.transition === IDLE_TRANSITION) {
        pendingNavigationController = void 0;
      }
    }
    state = Object.assign({}, state, updates);
    init.onChange(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function setFetcher(key, fetcher) {
    state.fetchers.set(key, fetcher);
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key))
      abortFetcher(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action,
          location: location2,
          submission
        } = event;
        let matches2 = matchClientRoutes(routes, location2);
        if (!matches2) {
          matches2 = [{
            params: {},
            pathname: "",
            route: routes[0]
          }];
          await handleNotFoundNavigation(location2, matches2);
        } else if (!submission && isHashChangeOnly(location2)) {
          await handleHashChange(location2, matches2);
        } else if (action === Action.Pop) {
          await handleLoad(location2, matches2);
        } else if (submission && isActionSubmission(submission)) {
          await handleActionSubmissionNavigation(location2, submission, matches2);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderSubmissionNavigation(location2, submission, matches2);
        } else if (isActionRedirectLocation(location2)) {
          await handleActionRedirect(location2, matches2);
        } else if (isLoaderSubmissionRedirectLocation(location2)) {
          await handleLoaderSubmissionRedirect(location2, matches2);
        } else if (isLoaderRedirectLocation(location2)) {
          await handleLoaderRedirect(location2, matches2);
        } else if (isFetchActionRedirect(location2)) {
          await handleFetchActionRedirect(location2, matches2);
        } else {
          await handleLoad(location2, matches2);
        }
        navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event;
        let matches2 = matchClientRoutes(routes, href);
        invariant2(matches2, "No matches found");
        if (fetchControllers.has(key))
          abortFetcher(key);
        let match = getFetcherRequestMatch(new URL(href, window.location.href), matches2);
        if (submission && isActionSubmission(submission)) {
          await handleActionFetchSubmission(key, submission, match);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderFetchSubmission(href, key, submission, match);
        } else {
          await handleLoaderFetch(href, key, match);
        }
        break;
      }
      default: {
        throw new Error(`Unknown data event type: ${event.type}`);
      }
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers) {
      controller.abort();
    }
  }
  function isIndexRequestUrl(url) {
    for (let param of url.searchParams.getAll("index")) {
      if (param === "") {
        return true;
      }
    }
    return false;
  }
  function getFetcherRequestMatch(url, matches2) {
    let match = matches2.slice(-1)[0];
    if (!isIndexRequestUrl(url) && match.route.index) {
      return matches2.slice(-2)[0];
    }
    return match;
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "fetchAction",
        setCookie: result.value.setCookie
      };
      fetchRedirectIds.add(key);
      init.onRedirect(result.value.location, locationState);
      let loadingFetcher = {
        state: "loading",
        type: "actionRedirect",
        submission,
        data: void 0
      };
      setFetcher(key, loadingFetcher);
      update({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    setFetcher(key, loadFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0;
    let maybeActionCatchResult = isCatchResult(result) ? result : void 0;
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches;
    let results = await callLoaders(state, state.transition.location || state.location, matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
    if (controller.signal.aborted) {
      return;
    }
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    let redirect = findRedirect(results);
    if (redirect) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: redirect.setCookie
      };
      init.onRedirect(redirect.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult) || [];
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys) {
      markFetchersDone(abortedKeys);
    }
    let yeetedNavigation = yeetStaleNavigationLoad(loadId);
    if (yeetedNavigation) {
      let {
        transition
      } = state;
      invariant2(transition.state === "loading", "Expected loading transition");
      update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else {
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
    }
  }
  function yeetStaleNavigationLoad(landedId) {
    let isLoadingNavigation = state.transition.state === "loading";
    if (isLoadingNavigation && navigationLoadId < landedId) {
      abortNormalNavigation();
      return true;
    }
    return false;
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      setFetcher(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant2(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    return yeetedKeys.length ? yeetedKeys : false;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    fetchControllers.delete(key);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    if (typeof AbortController === "undefined") {
      throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");
    }
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    fetchControllers.delete(key);
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      });
      return true;
    }
    return false;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      });
      return true;
    }
    return false;
  }
  async function handleNotFoundNavigation(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location: location2,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location2, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    let actionMatches = matches2;
    if (!isIndexRequestUrl(createUrl(submission.action)) && actionMatches[matches2.length - 1].route.index) {
      actionMatches = actionMatches.slice(0, -1);
    }
    let leafMatch = actionMatches.slice(-1)[0];
    let result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "action",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    let catchVal, catchBoundaryId;
    if (isCatchResult(result)) {
      [catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], actionMatches, result) || [];
    }
    let loadTransition = {
      state: "loading",
      type: "actionReload",
      submission,
      location: location2
    };
    update({
      transition: loadTransition,
      actionData: {
        [leafMatch.route.id]: result.value
      }
    });
    await loadPageData(location2, matches2, submission, leafMatch.route.id, result, catchVal, catchBoundaryId);
  }
  async function handleLoaderSubmissionNavigation(location2, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  async function handleHashChange(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    update({
      location: location2,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleLoaderRedirect(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalRedirect",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleLoaderSubmissionRedirect(location2, matches2) {
    abortNormalNavigation();
    invariant2(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "loaderSubmissionRedirect",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  async function handleFetchActionRedirect(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "fetchActionRedirect",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleActionRedirect(location2, matches2) {
    abortNormalNavigation();
    invariant2(state.transition.type === "actionSubmission" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "actionRedirect",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  function isHashChangeOnly(location2) {
    return createHref(state.location) === createHref(location2) && state.location.hash !== location2.hash;
  }
  async function loadPageData(location2, matches2, submission, submissionRouteId, actionResult, catchVal, catchBoundaryId) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0;
    let maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0;
    let controller = new AbortController();
    pendingNavigationController = controller;
    navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, location2, matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId, void 0, catchBoundaryId);
    if (controller.signal.aborted) {
      return;
    }
    let redirect = findRedirect(results);
    if (redirect) {
      if (state.transition.type === "actionReload" || isActionRedirectLocation(location2)) {
        let locationState = {
          isRedirect: true,
          type: "action",
          setCookie: redirect.setCookie
        };
        init.onRedirect(redirect.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: true,
          type: "loaderSubmission",
          setCookie: redirect.setCookie
        };
        init.onRedirect(redirect.location, locationState);
      } else {
        var _location$state;
        let locationState = {
          isRedirect: true,
          type: "loader",
          setCookie: redirect.setCookie || ((_location$state = location2.state) === null || _location$state === void 0 ? void 0 : _location$state.setCookie) === true
        };
        init.onRedirect(redirect.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult) || [catchVal, catchBoundaryId];
    markFetchRedirectsDone();
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    if (abortedIds) {
      markFetchersDone(abortedIds);
    }
    update({
      location: location2,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    if (pendingNavigationController) {
      pendingNavigationController.abort();
    }
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant2(controller, `Expected fetch controller: ${key}`);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant2(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.type === "actionRedirect") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }
    markFetchersDone(doneKeys);
  }
  return {
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
async function callLoaders(state, location2, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  let url = createUrl(createHref(location2));
  let matchesToLoad = filterMatchesToLoad(state, location2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
}
async function callLoader(match, url, signal) {
  invariant2(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match;
    let value = await match.route.loader({
      params,
      url,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, location2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  var _location$state2;
  if (catchBoundaryId || submissionRouteId && (actionCatchResult || actionErrorResult)) {
    let foundProblematicRoute = false;
    matches = matches.filter((match) => {
      if (foundProblematicRoute) {
        return false;
      }
      if (match.route.id === submissionRouteId || match.route.id === catchBoundaryId) {
        foundProblematicRoute = true;
        return false;
      }
      return true;
    });
  }
  let isNew = (match, index) => {
    if (!state.matches[index])
      return true;
    return match.route.id !== state.matches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _state$matches$index$;
    return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
  };
  let url = createUrl(createHref(location2));
  let filterByRouteProps = (match, index) => {
    if (!match.route.loader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url,
        submission,
        params: match.params
      });
    }
    return true;
  };
  let isInRootCatchBoundary = state.matches.length === 1;
  if (isInRootCatchBoundary) {
    return matches.filter((match) => !!match.route.loader);
  }
  if ((fetcher === null || fetcher === void 0 ? void 0 : fetcher.type) === "actionReload") {
    return matches.filter(filterByRouteProps);
  } else if (state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || state.transition.type === "fetchActionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search.substring(1) || (_location$state2 = location2.state) !== null && _location$state2 !== void 0 && _location$state2.setCookie) {
    return matches.filter(filterByRouteProps);
  }
  return matches.filter((match, index, arr) => {
    var _location$state3;
    if ((actionErrorResult || actionCatchResult) && arr.length - 1 === index) {
      return false;
    }
    return match.route.loader && (isNew(match, index) || matchPathChanged(match, index) || ((_location$state3 = location2.state) === null || _location$state3 === void 0 ? void 0 : _location$state3.setCookie));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location2) {
  return location2.pathname + location2.search;
}
function findRedirect(results) {
  for (let result of results) {
    if (isRedirectResult(result)) {
      return result.value;
    }
  }
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results) {
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return null;
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results) {
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.CatchBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.ErrorBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results) {
    newData[match.route.id] = value;
  }
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    if (value !== void 0) {
      loaderData[route.id] = value;
    }
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}

// node_modules/@remix-run/react/dist/esm/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ React2.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute, routeModulesCache),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component);
    let children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    if (children.length > 0)
      route.children = children;
    return route;
  });
}
function createShouldReload(route, routeModules) {
  let shouldReload = (arg) => {
    let module = routeModules[route.id];
    invariant2(module, `Expected route module to be loaded for ${route.id}`);
    if (module.unstable_shouldReload) {
      return module.unstable_shouldReload(arg);
    }
    return true;
  };
  return shouldReload;
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(routeModule);
  return routeModule;
}
function createLoader(route, routeModules) {
  let loader = async ({
    url,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect = await checkRedirect(result);
      if (redirect)
        return redirect;
      if (isCatchResponse(result)) {
        throw new CatchValue(result.status, result.statusText, await extractData(result));
      }
      return extractData(result);
    } else {
      await loadRouteModuleWithBlockingLinks(route, routeModules);
    }
  };
  return loader;
}
function createAction(route, routeModules) {
  let action = async ({
    url,
    signal,
    submission
  }) => {
    if (!route.hasAction) {
      console.error(`Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
    }
    let result = await fetchData(url, route.id, signal, submission);
    if (result instanceof Error) {
      throw result;
    }
    let redirect = await checkRedirect(result);
    if (redirect)
      return redirect;
    await loadRouteModuleWithBlockingLinks(route, routeModules);
    if (isCatchResponse(result)) {
      throw new CatchValue(result.status, result.statusText, await extractData(result));
    }
    return extractData(result);
  };
  return action;
}
async function checkRedirect(response) {
  if (isRedirectResponse(response)) {
    let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url.origin !== window.location.origin) {
      await new Promise(() => {
        window.location.replace(url.href);
      });
    } else {
      return new TransitionRedirect(url.pathname + url.search + url.hash, response.headers.get("X-Remix-Revalidate") !== null);
    }
  }
  return null;
}

// node_modules/@remix-run/react/dist/esm/components.js
var RemixEntryContext = /* @__PURE__ */ React3.createContext(void 0);
function useRemixEntryContext() {
  let context = React3.useContext(RemixEntryContext);
  invariant2(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixEntry({
  context: entryContext,
  action,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = false
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    appState: entryComponentDidCatchEmulator
  } = entryContext;
  let clientRoutes = React3.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]);
  let [clientState, setClientState] = React3.useState(entryComponentDidCatchEmulator);
  let [transitionManager] = React3.useState(() => {
    return createTransitionManager({
      routes: clientRoutes,
      actionData: documentActionData,
      loaderData: documentLoaderData,
      location: historyLocation,
      catch: entryComponentDidCatchEmulator.catch,
      catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
      onRedirect: _navigator.replace,
      onChange: (state) => {
        setClientState({
          catch: state.catch,
          error: state.error,
          catchBoundaryRouteId: state.catchBoundaryId,
          loaderBoundaryRouteId: state.errorBoundaryId,
          renderBoundaryRouteId: null,
          trackBoundaries: false,
          trackCatchBoundaries: false
        });
      }
    });
  });
  let navigator = React3.useMemo(() => {
    let push = (to, state) => {
      return transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
    };
    return {
      ..._navigator,
      push
    };
  }, [_navigator, transitionManager]);
  let {
    location: location2,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  React3.useEffect(() => {
    let {
      location: location3
    } = transitionManager.getState();
    if (historyLocation === location3)
      return;
    transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action
    });
  }, [transitionManager, historyLocation, action]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0;
  let ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ React3.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      appState: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ React3.createElement(RemixErrorBoundary, {
    location: location2,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
    location: location2,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ React3.createElement(Router, {
    navigationType: action,
    location: location2,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ React3.createElement(Routes2, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  error.stack = data.stack;
  return error;
}
function Routes2() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let element = useRoutes(clientRoutes) || clientRoutes[0].element;
  return element;
}
var RemixRouteContext = /* @__PURE__ */ React3.createContext(void 0);
function useRemixRouteContext() {
  let context = React3.useContext(RemixRouteContext);
  invariant2(context, "You must render this element in a remix route element");
  return context;
}
function DefaultRouteComponent({
  id
}) {
  throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id
}) {
  let location2 = useLocation();
  let {
    routeData,
    routeModules,
    appState
  } = useRemixEntryContext();
  invariant2(routeData, "Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  invariant2(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let data = routeData[id];
  let {
    default: Component,
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  let element = Component ? /* @__PURE__ */ React3.createElement(Component, null) : /* @__PURE__ */ React3.createElement(DefaultRouteComponent, {
    id
  });
  let context = {
    data,
    id
  };
  if (CatchBoundary) {
    let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
    if (appState.trackCatchBoundaries) {
      appState.catchBoundaryRouteId = id;
    }
    context = maybeServerCaught ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
      location: location2,
      component: CatchBoundary,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary) {
    let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
    if (appState.trackBoundaries) {
      appState.renderBoundaryRouteId = id;
    }
    context = maybeServerRenderError ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ React3.createElement(RemixErrorBoundary, {
      location: location2,
      component: ErrorBoundary,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ React3.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React3.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React3.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React3.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    }
  };
  React3.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var NavLink2 = /* @__PURE__ */ React3.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(NavLink, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink2.displayName = "NavLink";
var Link2 = /* @__PURE__ */ React3.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Link, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link2.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext();
  let links = React3.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, links.map((link) => {
    if (isPageLinkDescriptor(link)) {
      return /* @__PURE__ */ React3.createElement(PrefetchPageLinks, _extends2({
        key: link.page
      }, link));
    }
    let imageSrcSet = null;
    if ("useId" in React3) {
      if (link.imagesrcset) {
        link.imageSrcSet = imageSrcSet = link.imagesrcset;
        delete link.imagesrcset;
      }
      if (link.imagesizes) {
        link.imageSizes = link.imagesizes;
        delete link.imagesizes;
      }
    } else {
      if (link.imageSrcSet) {
        link.imagesrcset = imageSrcSet = link.imageSrcSet;
        delete link.imageSrcSet;
      }
      if (link.imageSizes) {
        link.imagesizes = link.imageSizes;
        delete link.imageSizes;
      }
    }
    return /* @__PURE__ */ React3.createElement("link", _extends2({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let matches = React3.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ React3.createElement(PrefetchPageLinksImpl, _extends2({
    page,
    matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext();
  let [styleLinks, setStyleLinks] = React3.useState([]);
  React3.useEffect(() => {
    let interrupted = false;
    getStylesheetPrefetchLinks(matches, routeModules).then((links) => {
      if (!interrupted)
        setStyleLinks(links);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location2 = useLocation();
  let {
    matches,
    manifest
  } = useRemixEntryContext();
  let newMatchesForData = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location2, "data"), [page, nextMatches, matches, location2]);
  let newMatchesForAssets = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location2, "assets"), [page, nextMatches, matches, location2]);
  let dataHrefs = React3.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = React3.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends2({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends2({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React3.createElement("link", _extends2({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext();
  let location2 = useLocation();
  let meta = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = routeData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location: location2
      }) : routeModule.meta;
      Object.assign(meta, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, Object.entries(meta).map(([name, value]) => {
    if (!value) {
      return null;
    }
    if (["charset", "charSet"].includes(name)) {
      return /* @__PURE__ */ React3.createElement("meta", {
        key: "charset",
        charSet: value
      });
    }
    if (name === "title") {
      return /* @__PURE__ */ React3.createElement("title", {
        key: "title"
      }, value);
    }
    let isOpenGraphTag = name.startsWith("og:");
    return [value].flat().map((content) => {
      if (isOpenGraphTag) {
        return /* @__PURE__ */ React3.createElement("meta", {
          content,
          key: name + content,
          property: name
        });
      }
      if (typeof content === "string") {
        return /* @__PURE__ */ React3.createElement("meta", {
          content,
          name,
          key: name + content
        });
      }
      return /* @__PURE__ */ React3.createElement("meta", _extends2({
        key: name + JSON.stringify(content)
      }, content));
    });
  }));
}
var isHydrated = false;
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  React3.useEffect(() => {
    isHydrated = true;
  }, []);
  let initialScripts = React3.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "";
    let routeModulesScript = `${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};`;
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(contextScript)
    })), /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      src: manifest.url
    })), /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module"
    })), /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      src: manifest.entry.module,
      type: "module"
    })));
  }, []);
  let nextMatches = React3.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      invariant2(matches2, `No routes match path "${pendingLocation.pathname}"`);
      return matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]);
  let routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dedupe2(preloads).map((path) => /* @__PURE__ */ React3.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), isHydrated ? null : initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
var Form = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  return /* @__PURE__ */ React3.createElement(FormImpl, _extends2({}, props, {
    ref
  }));
});
Form.displayName = "Form";
var FormImpl = /* @__PURE__ */ React3.forwardRef(({
  reloadDocument = false,
  replace = false,
  method = "get",
  action = ".",
  encType = "application/x-www-form-urlencoded",
  fetchKey,
  onSubmit,
  ...props
}, forwardedRef) => {
  let submit = useSubmitImpl(fetchKey);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action);
  return /* @__PURE__ */ React3.createElement("form", _extends2({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    encType,
    onSubmit: reloadDocument ? void 0 : (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented)
        return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      submit(submitter || event.currentTarget, {
        method,
        replace
      });
    }
  }, props));
});
FormImpl.displayName = "FormImpl";
function useFormAction(action = ".", method = "get") {
  let {
    id
  } = useRemixRouteContext();
  let path = useResolvedPath(action);
  let search = path.search;
  let isIndexRoute = id.endsWith("/index");
  if (action === "." && isIndexRoute) {
    search = search ? search.replace(/^\?/, "?index&") : "?index";
  }
  return path.pathname + search;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function useSubmitImpl(key) {
  let navigate = useNavigate();
  let defaultAction = useFormAction();
  let {
    transitionManager
  } = useRemixEntryContext();
  return React3.useCallback((target, options = {}) => {
    let method;
    let action;
    let encType;
    let formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("enctype") || defaultEncType;
      formData = new FormData(target);
      if (submissionTrigger && submissionTrigger.name) {
        formData.append(submissionTrigger.name, submissionTrigger.value);
      }
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(`Cannot submit a <button> without a <form>`);
      }
      method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
      formData = new FormData(form);
      if (target.name) {
        formData.set(target.name, target.value);
      }
    } else {
      if (isHtmlElement(target)) {
        throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
      }
      method = options.method || "get";
      action = options.action || defaultAction;
      encType = options.encType || "application/x-www-form-urlencoded";
      if (target instanceof FormData) {
        formData = target;
      } else {
        formData = new FormData();
        if (target instanceof URLSearchParams) {
          for (let [name, value] of target) {
            formData.append(name, value);
          }
        } else if (target != null) {
          for (let name of Object.keys(target)) {
            formData.append(name, target[name]);
          }
        }
      }
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    }
    let {
      protocol,
      host
    } = window.location;
    let url = new URL(action, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      for (let [name, value] of formData) {
        if (typeof value === "string") {
          url.searchParams.append(name, value);
        } else {
          throw new Error(`Cannot submit binary form data using GET`);
        }
      }
    }
    let submission = {
      formData,
      action: url.pathname + url.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    if (key) {
      transitionManager.send({
        type: "fetcher",
        href: submission.action,
        submission,
        key
      });
    } else {
      setNextNavigationSubmission(submission);
      navigate(url.pathname + url.search, {
        replace: options.replace
      });
    }
  }, [defaultAction, key, navigate, transitionManager]);
}
var nextNavigationSubmission;
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  nextNavigationSubmission = void 0;
  return submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  React3.useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}
function useLoaderData() {
  return useRemixRouteContext().data;
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
function createFetcherForm(fetchKey) {
  let FetcherForm = /* @__PURE__ */ React3.forwardRef((props, ref) => {
    return /* @__PURE__ */ React3.createElement(FormImpl, _extends2({}, props, {
      ref,
      fetchKey
    }));
  });
  FetcherForm.displayName = "fetcher.Form";
  return FetcherForm;
}
var fetcherId = 0;
function useFetcher() {
  let {
    transitionManager
  } = useRemixEntryContext();
  let [key] = React3.useState(() => String(++fetcherId));
  let [Form2] = React3.useState(() => createFetcherForm(key));
  let [load] = React3.useState(() => (href) => {
    transitionManager.send({
      type: "fetcher",
      href,
      key
    });
  });
  let submit = useSubmitImpl(key);
  let fetcher = transitionManager.getFetcher(key);
  let fetcherWithComponents = React3.useMemo(() => ({
    Form: Form2,
    submit,
    load,
    ...fetcher
  }), [fetcher, Form2, submit, load]);
  React3.useEffect(() => {
    return () => transitionManager.deleteFetcher(key);
  }, [transitionManager, key]);
  return fetcherWithComponents;
}
var LiveReload = false ? () => null : function LiveReload2({
  port = Number(52352),
  nonce = void 0
}) {
  let js = String.raw;
  return /* @__PURE__ */ React3.createElement("script", {
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: js`
                (() => {
                  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
                  let host = location.hostname;
                  let socketPath = protocol + "//" + host + ":" + ${String(port)} + "/socket";

                  let ws = new WebSocket(socketPath);
                  ws.onmessage = (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                })();
              `
    }
  });
};

// node_modules/@remix-run/react/dist/esm/browser.js
function RemixBrowser(_props) {
  let historyRef = React4.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }
  let history = historyRef.current;
  let [state, dispatch] = React4.useReducer((_, update) => update, {
    action: history.action,
    location: history.location
  });
  React4.useLayoutEffect(() => history.listen(dispatch), [history]);
  let entryContext = window.__remixContext;
  entryContext.manifest = window.__remixManifest;
  entryContext.routeModules = window.__remixRouteModules;
  entryContext.appState.trackBoundaries = false;
  entryContext.appState.trackCatchBoundaries = false;
  return /* @__PURE__ */ React4.createElement(RemixEntry, {
    context: entryContext,
    action: state.action,
    location: state.location,
    navigator: history
  });
}

// node_modules/@remix-run/react/dist/esm/index.js
init_react();
init_react_router_dom();

// node_modules/@remix-run/react/dist/esm/scroll-restoration.js
init_react();
var React5 = __toESM(require_react());
init_react_router_dom();
var STORAGE_KEY = "positions";
var positions = {};
if (typeof document !== "undefined") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  if (sessionPositions) {
    positions = JSON.parse(sessionPositions);
  }
}
function ScrollRestoration({
  nonce = void 0
}) {
  useScrollRestoration();
  React5.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useBeforeUnload(React5.useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  let restoreScroll = ((STORAGE_KEY2) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key
      }, "");
    }
    try {
      let positions2 = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}");
      let storedY = positions2[window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React5.createElement("script", {
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
    }
  });
}
var hydrated = false;
function useScrollRestoration() {
  let location2 = useLocation();
  let transition = useTransition();
  let wasSubmissionRef = React5.useRef(false);
  React5.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
  React5.useEffect(() => {
    if (transition.location) {
      positions[location2.key] = window.scrollY;
    }
  }, [transition, location2]);
  useBeforeUnload(React5.useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, []));
  if (typeof document !== "undefined") {
    React5.useLayoutEffect(() => {
      if (!hydrated) {
        hydrated = true;
        return;
      }
      let y2 = positions[location2.key];
      if (y2 != void 0) {
        window.scrollTo(0, y2);
        return;
      }
      if (location2.hash) {
        let el = document.getElementById(location2.hash.slice(1));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (wasSubmissionRef.current === true) {
        wasSubmissionRef.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [location2]);
  }
  React5.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
}

// app/stitches/client.context.ts
init_react();
var import_react4 = __toESM(require_react());
var ClientStyleContext = (0, import_react4.createContext)({
  reset: () => null,
  sheet: ""
});

// app/stitches/stitches.config.ts
init_react();

// node_modules/@stitches/react/dist/index.mjs
init_react();
var import_react5 = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r2 = "space";
var n = { gap: r2, gridGap: r2, columnGap: r2, gridColumnGap: r2, rowGap: r2, gridRowGap: r2, inset: r2, insetBlock: r2, insetBlockEnd: r2, insetBlockStart: r2, insetInline: r2, insetInlineEnd: r2, insetInlineStart: r2, margin: r2, marginTop: r2, marginRight: r2, marginBottom: r2, marginLeft: r2, marginBlock: r2, marginBlockEnd: r2, marginBlockStart: r2, marginInline: r2, marginInlineEnd: r2, marginInlineStart: r2, padding: r2, paddingTop: r2, paddingRight: r2, paddingBottom: r2, paddingLeft: r2, paddingBlock: r2, paddingBlockEnd: r2, paddingBlockStart: r2, paddingInline: r2, paddingInlineEnd: r2, paddingInlineStart: r2, top: r2, right: r2, bottom: r2, left: r2, scrollMargin: r2, scrollMarginTop: r2, scrollMarginRight: r2, scrollMarginBottom: r2, scrollMarginLeft: r2, scrollMarginX: r2, scrollMarginY: r2, scrollMarginBlock: r2, scrollMarginBlockEnd: r2, scrollMarginBlockStart: r2, scrollMarginInline: r2, scrollMarginInlineEnd: r2, scrollMarginInlineStart: r2, scrollPadding: r2, scrollPaddingTop: r2, scrollPaddingRight: r2, scrollPaddingBottom: r2, scrollPaddingLeft: r2, scrollPaddingX: r2, scrollPaddingY: r2, scrollPaddingBlock: r2, scrollPaddingBlockEnd: r2, scrollPaddingBlockStart: r2, scrollPaddingInline: r2, scrollPaddingInlineEnd: r2, scrollPaddingInlineStart: r2, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e2, t2) => typeof t2 == "function" ? { "()": Function.prototype.toString.call(t2) } : t2;
var o = () => {
  const e2 = /* @__PURE__ */ Object.create(null);
  return (t2, r3, ...n2) => {
    const o2 = ((e3) => JSON.stringify(e3, i))(t2);
    return o2 in e2 ? e2[o2] : e2[o2] = r3(t2, ...n2);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2));
var a = (e2) => {
  for (const t2 in e2)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, (e3) => "-" + e3.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e2) => (t2) => e2(...typeof t2 == "string" ? String(t2).split(g) : [t2]);
var u = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"` }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p((e2, t2) => ({ marginBlockStart: e2, marginBlockEnd: t2 || e2 })), marginInline: p((e2, t2) => ({ marginInlineStart: e2, marginInlineEnd: t2 || e2 })), maxSize: p((e2, t2) => ({ maxBlockSize: e2, maxInlineSize: t2 || e2 })), minSize: p((e2, t2) => ({ minBlockSize: e2, minInlineSize: t2 || e2 })), paddingBlock: p((e2, t2) => ({ paddingBlockStart: e2, paddingBlockEnd: t2 || e2 })), paddingInline: p((e2, t2) => ({ paddingInlineStart: e2, paddingInlineEnd: t2 || e2 })) };
var h = /([\d.]+)([^]*)/;
var f = (e2, t2) => e2.length ? e2.reduce((e3, r3) => (e3.push(...t2.map((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r3) && /&.*&/.test(e4) ? `:is(${r3})` : r3) : r3 + " " + e4)), e3), []) : t2;
var m = (e2, t2) => e2 in b && typeof t2 == "string" ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t3, r3, n2, i2) => r3 + (n2 === "stretch" ? `-moz-available${i2};${d(e2)}:${r3}-webkit-fill-available` : `-moz-fit-content${i2};${d(e2)}:${r3}fit-content`) + i2) : String(t2);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e2) => e2 ? e2 + "-" : "";
var k = (e2, t2, r3) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e3, n2, i2, o2, l2) => o2 == "$" == !!i2 ? e3 : (n2 || o2 == "--" ? "calc(" : "") + "var(--" + (o2 === "$" ? S(t2) + (l2.includes("$") ? "" : S(r3)) + l2.replace(/\$/g, "-") : l2) + ")" + (n2 || o2 == "--" ? "*" + (n2 || "") + (i2 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B2 = Object.prototype.toString;
var $ = (e2, t2, r3, n2, i2) => {
  let o2, l2, s2;
  const a2 = (e3, t3, r4) => {
    let c2, g2;
    const p2 = (e4) => {
      for (c2 in e4) {
        const R2 = c2.charCodeAt(0) === 64, z2 = R2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
        for (g2 of z2) {
          const e5 = /[A-Z]/.test($2 = c2) ? $2 : $2.replace(/-[^]/g, (e6) => e6[1].toUpperCase()), z3 = typeof g2 == "object" && g2 && g2.toString === B2 && (!n2.utils[e5] || !t3.length);
          if (e5 in n2.utils && !z3) {
            const t4 = n2.utils[e5];
            if (t4 !== l2) {
              l2 = t4, p2(t4(g2)), l2 = null;
              continue;
            }
          } else if (e5 in u) {
            const t4 = u[e5];
            if (t4 !== s2) {
              s2 = t4, p2(t4(g2)), s2 = null;
              continue;
            }
          }
          if (R2 && (b2 = c2.slice(1) in n2.media ? "@media " + n2.media[c2.slice(1)] : c2, c2 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e6, t4, r5, n3, i3, o3) => {
            const l3 = h.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [n3, t4] : [t4, n3];
            return "(" + (r5[0] === "=" ? "" : r5[0] === ">" === l3 ? "max-" : "min-") + a3 + ":" + (r5[0] !== "=" && r5.length === 1 ? c3.replace(h, (e7, t5, n4) => Number(t5) + s3 * (r5 === ">" ? 1 : -1) + n4) : c3) + (i3 ? ") and (" + (i3[0] === ">" ? "min-" : "max-") + a3 + ":" + (i3.length === 1 ? o3.replace(h, (e7, t5, r6) => Number(t5) + s3 * (i3 === ">" ? -1 : 1) + r6) : o3) : "") + ")";
          })), z3) {
            const e6 = R2 ? r4.concat(c2) : [...r4], n3 = R2 ? [...t3] : f(t3, c2.split(y));
            o2 !== void 0 && i2(x(...o2)), o2 = void 0, a2(g2, n3, e6);
          } else
            o2 === void 0 && (o2 = [[], t3, r4]), c2 = R2 || c2.charCodeAt(0) !== 36 ? c2 : `--${S(n2.prefix)}${c2.slice(1).replace(/\$/g, "-")}`, g2 = z3 ? g2 : typeof g2 == "number" ? g2 && e5 in I2 ? String(g2) + "px" : String(g2) : k(m(e5, g2 == null ? "" : g2), n2.prefix, n2.themeMap[e5]), o2[0].push(`${R2 ? `${c2} ` : `${d(c2)}:`}${g2}`);
        }
      }
      var b2, $2;
    };
    p2(e3), o2 !== void 0 && i2(x(...o2)), o2 = void 0;
  };
  a2(e2, t2, r3);
};
var x = (e2, t2, r3) => `${r3.map((e3) => `${e3}{`).join("")}${t2.length ? `${t2.join(",")}{` : ""}${e2.join(";")}${t2.length ? "}" : ""}${Array(r3.length ? r3.length + 1 : 0).join("}")}`;
var I2 = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
var z = (e2) => ((e3) => {
  let t2, r3 = "";
  for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0)
    r3 = R(t2 % 52) + r3;
  return R(t2 % 52) + r3;
})(((e3, t2) => {
  let r3 = t2.length;
  for (; r3; )
    e3 = 33 * e3 ^ t2.charCodeAt(--r3);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin))
    return false;
  try {
    return !!e2.cssRules;
  } catch (e3) {
    return false;
  }
};
var E = (e2) => {
  let t2;
  const r3 = () => {
    const { cssRules: e3 } = t2.sheet;
    return [].map.call(e3, (r4, n3) => {
      const { cssText: i2 } = r4;
      let o2 = "";
      if (i2.startsWith("--sxs"))
        return "";
      if (e3[n3 - 1] && (o2 = e3[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r4.cssRules.length)
          return "";
        for (const e4 in t2.rules)
          if (t2.rules[e4].group === r4)
            return `--sxs{--sxs:${[...t2.rules[e4].cache].join(" ")}}${i2}`;
        return r4.cssRules.length ? `${o2}${i2}` : "";
      }
      return i2;
    }).join("");
  }, n2 = () => {
    if (t2) {
      const { rules: e3, sheet: r4 } = t2;
      if (!r4.deleteRule) {
        for (; Object(Object(r4.cssRules)[0]).type === 3; )
          r4.cssRules.splice(0, 1);
        r4.cssRules = [];
      }
      for (const t3 in e3)
        delete e3[t3];
    }
    const i2 = Object(e2).styleSheets || [];
    for (const e3 of i2)
      if (j(e3)) {
        for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
          const l3 = Object(o3[i3]);
          if (l3.type !== 1)
            continue;
          const s2 = Object(o3[i3 + 1]);
          if (s2.type !== 4)
            continue;
          ++i3;
          const { cssText: a2 } = l3;
          if (!a2.startsWith("--sxs"))
            continue;
          const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = W[c2[0]];
          d2 && (t2 || (t2 = { sheet: e3, reset: n2, rules: {}, toString: r3 }), t2.rules[d2] = { group: s2, index: i3, cache: new Set(c2) });
        }
        if (t2)
          break;
      }
    if (!t2) {
      const i3 = (e3, t3) => ({ type: t3, cssRules: [], insertRule(e4, t4) {
        this.cssRules.splice(t4, 0, i3(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return e3 === "@media{}" ? `@media{${[].map.call(this.cssRules, (e4) => e4.cssText).join("")}}` : e3;
      } });
      t2 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: n2, toString: r3 };
    }
    const { sheet: o2, rules: l2 } = t2;
    for (let e3 = W.length - 1; e3 >= 0; --e3) {
      const t3 = W[e3];
      if (!l2[t3]) {
        const r4 = W[e3 + 1], n3 = l2[r4] ? l2[r4].index : o2.cssRules.length;
        o2.insertRule("@media{}", n3), o2.insertRule(`--sxs{--sxs:${e3}}`, n3), l2[t3] = { group: o2.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e3]) };
      }
      v(l2[t3]);
    }
  };
  return n2(), t2;
};
var v = (e2) => {
  const t2 = e2.group;
  let r3 = t2.cssRules.length;
  e2.apply = (e3) => {
    try {
      t2.insertRule(e3, r3), ++r3;
    } catch (e4) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e2, t2) => w(e2, () => (...r3) => {
  let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t3 of r3)
    if (t3 != null)
      if (t3[l]) {
        n2.type == null && (n2.type = t3[l].type);
        for (const e3 of t3[l].composers)
          n2.composers.add(e3);
      } else
        t3.constructor !== Object || t3.$$typeof ? n2.type == null && (n2.type = t3) : n2.composers.add(C(t3, e2));
  return n2.type == null && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e2, n2, t2);
});
var C = ({ variants: e2, compoundVariants: t2, defaultVariants: r3, ...n2 }, i2) => {
  const o2 = `${S(i2.prefix)}c-${z(n2)}`, l2 = [], s2 = [], d2 = /* @__PURE__ */ Object.create(null), g2 = [];
  for (const e3 in r3)
    d2[e3] = String(r3[e3]);
  if (typeof e2 == "object" && e2)
    for (const t3 in e2) {
      p2 = d2, u2 = t3, c.call(p2, u2) || (d2[t3] = "undefined");
      const r4 = e2[t3];
      for (const e3 in r4) {
        const n3 = { [t3]: String(e3) };
        String(e3) === "undefined" && g2.push(t3);
        const i3 = r4[e3], o3 = [n3, i3, !a(i3)];
        l2.push(o3);
      }
    }
  var p2, u2;
  if (typeof t2 == "object" && t2)
    for (const e3 of t2) {
      let { css: t3, ...r4 } = e3;
      t3 = typeof t3 == "object" && t3 || {};
      for (const e4 in r4)
        r4[e4] = String(r4[e4]);
      const n3 = [r4, t3, !a(t3)];
      s2.push(n3);
    }
  return [o2, n2, l2, s2, d2, g2];
};
var P = (e2, t2, r3) => {
  const [n2, i2, o2, a2] = L(t2.composers), c2 = typeof t2.type == "function" || t2.type.$$typeof ? ((e3) => {
    function t3() {
      for (let r4 = 0; r4 < t3[T].length; r4++) {
        const [n3, i3] = t3[T][r4];
        e3.rules[n3].apply(i3);
      }
      return t3[T] = [], null;
    }
    return t3[T] = [], t3.rules = {}, W.forEach((e4) => t3.rules[e4] = { apply: (r4) => t3[T].push([e4, r4]) }), t3;
  })(r3) : null, d2 = (c2 || r3).rules, g2 = `.${n2}${i2.length > 1 ? `:where(.${i2.slice(1).join(".")})` : ""}`, p2 = (l2) => {
    l2 = typeof l2 == "object" && l2 || A;
    const { css: s2, ...p3 } = l2, u2 = {};
    for (const e3 in o2)
      if (delete p3[e3], e3 in l2) {
        let t3 = l2[e3];
        typeof t3 == "object" && t3 ? u2[e3] = { "@initial": o2[e3], ...t3 } : (t3 = String(t3), u2[e3] = t3 !== "undefined" || a2.has(e3) ? t3 : o2[e3]);
      } else
        u2[e3] = o2[e3];
    const h2 = /* @__PURE__ */ new Set([...i2]);
    for (const [n3, i3, o3, l3] of t2.composers) {
      r3.rules.styled.cache.has(n3) || (r3.rules.styled.cache.add(n3), $(i3, [`.${n3}`], [], e2, (e3) => {
        d2.styled.apply(e3);
      }));
      const t3 = O(o3, u2, e2.media), s3 = O(l3, u2, e2.media, true);
      for (const i4 of t3)
        if (i4 !== void 0)
          for (const [t4, o4, l4] of i4) {
            const i5 = `${n3}-${z(o4)}-${t4}`;
            h2.add(i5);
            const s4 = (l4 ? r3.rules.resonevar : r3.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
            s4.has(i5) || (s4.add(i5), $(o4, [`.${i5}`], [], e2, (e3) => {
              a3.apply(e3);
            }));
          }
      for (const t4 of s3)
        if (t4 !== void 0)
          for (const [i4, o4] of t4) {
            const t5 = `${n3}-${z(o4)}-${i4}`;
            h2.add(t5), r3.rules.allvar.cache.has(t5) || (r3.rules.allvar.cache.add(t5), $(o4, [`.${t5}`], [], e2, (e3) => {
              d2.allvar.apply(e3);
            }));
          }
    }
    if (typeof s2 == "object" && s2) {
      const t3 = `${n2}-i${z(s2)}-css`;
      h2.add(t3), r3.rules.inline.cache.has(t3) || (r3.rules.inline.cache.add(t3), $(s2, [`.${t3}`], [], e2, (e3) => {
        d2.inline.apply(e3);
      }));
    }
    for (const e3 of String(l2.className || "").trim().split(/\s+/))
      e3 && h2.add(e3);
    const f2 = p3.className = [...h2].join(" ");
    return { type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2 };
  };
  return s(p2, { className: n2, selector: g2, [l]: t2, toString: () => (r3.rules.styled.cache.has(n2) || p2(), n2) });
};
var L = (e2) => {
  let t2 = "";
  const r3 = [], n2 = {}, i2 = [];
  for (const [o2, , , , l2, s2] of e2) {
    t2 === "" && (t2 = o2), r3.push(o2), i2.push(...s2);
    for (const e3 in l2) {
      const t3 = l2[e3];
      (n2[e3] === void 0 || t3 !== "undefined" || s2.includes(t3)) && (n2[e3] = t3);
    }
  }
  return [t2, r3, n2, new Set(i2)];
};
var O = (e2, t2, r3, n2) => {
  const i2 = [];
  e:
    for (let [o2, l2, s2] of e2) {
      if (s2)
        continue;
      let e3, a2 = 0, c2 = false;
      for (e3 in o2) {
        const n3 = o2[e3];
        let i3 = t2[e3];
        if (i3 !== n3) {
          if (typeof i3 != "object" || !i3)
            continue e;
          {
            let e4, t3, o3 = 0;
            for (const l3 in i3) {
              if (n3 === String(i3[l3])) {
                if (l3 !== "@initial") {
                  const e5 = l3.slice(1);
                  (t3 = t3 || []).push(e5 in r3 ? r3[e5] : l3.replace(/^@media ?/, "")), c2 = true;
                }
                a2 += o3, e4 = true;
              }
              ++o3;
            }
            if (t3 && t3.length && (l2 = { ["@media " + t3.join(", ")]: l2 }), !e4)
              continue e;
          }
        }
      }
      (i2[a2] = i2[a2] || []).push([n2 ? "cv" : `${e3}-${o2[e3]}`, l2, c2]);
    }
  return i2;
};
var A = {};
var N = o();
var D = (e2, t2) => N(e2, () => (...r3) => {
  const n2 = () => {
    for (let n3 of r3) {
      n3 = typeof n3 == "object" && n3 || {};
      let r4 = z(n3);
      if (!t2.rules.global.cache.has(r4)) {
        if (t2.rules.global.cache.add(r4), "@import" in n3) {
          let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
          for (let r5 of [].concat(n3["@import"]))
            r5 = r5.includes('"') || r5.includes("'") ? r5 : `"${r5}"`, t2.sheet.insertRule(`@import ${r5};`, e3++);
          delete n3["@import"];
        }
        $(n3, [], [], e2, (e3) => {
          t2.rules.global.apply(e3);
        });
      }
    }
    return "";
  };
  return s(n2, { toString: n2 });
});
var H = o();
var V = (e2, t2) => H(e2, () => (r3) => {
  const n2 = `${S(e2.prefix)}k-${z(r3)}`, i2 = () => {
    if (!t2.rules.global.cache.has(n2)) {
      t2.rules.global.cache.add(n2);
      const i3 = [];
      $(r3, [], [], e2, (e3) => i3.push(e3));
      const o2 = `@keyframes ${n2}{${i3.join("")}}`;
      t2.rules.global.apply(o2);
    }
    return n2;
  };
  return s(i2, { get name() {
    return i2();
  }, toString: i2 });
});
var G = class {
  constructor(e2, t2, r3, n2) {
    this.token = e2 == null ? "" : String(e2), this.value = t2 == null ? "" : String(t2), this.scale = r3 == null ? "" : String(r3), this.prefix = n2 == null ? "" : String(n2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J2 = (e2, t2) => F(e2, () => (r3, n2) => {
  n2 = typeof r3 == "object" && r3 || Object(n2);
  const i2 = `.${r3 = (r3 = typeof r3 == "string" ? r3 : "") || `${S(e2.prefix)}t-${z(n2)}`}`, o2 = {}, l2 = [];
  for (const t3 in n2) {
    o2[t3] = {};
    for (const r4 in n2[t3]) {
      const i3 = `--${S(e2.prefix)}${t3}-${r4}`, s3 = k(String(n2[t3][r4]), e2.prefix, t3);
      o2[t3][r4] = new G(r4, s3, t3, e2.prefix), l2.push(`${i3}:${s3}`);
    }
  }
  const s2 = () => {
    if (l2.length && !t2.rules.themed.cache.has(r3)) {
      t2.rules.themed.cache.add(r3);
      const i3 = `${n2 === e2.theme ? ":root," : ""}.${r3}{${l2.join(";")}}`;
      t2.rules.themed.apply(i3);
    }
    return r3;
  };
  return { ...o2, get className() {
    return s2();
  }, selector: i2, toString: s2 };
});
var U = o();
var X;
var Y = o();
var q = (e2) => {
  const t2 = ((e3) => {
    let t3 = false;
    const r3 = U(e3, (e4) => {
      t3 = true;
      const r4 = "prefix" in (e4 = typeof e4 == "object" && e4 || {}) ? String(e4.prefix) : "", i2 = typeof e4.media == "object" && e4.media || {}, o2 = typeof e4.root == "object" ? e4.root || null : globalThis.document || null, l2 = typeof e4.theme == "object" && e4.theme || {}, s2 = { prefix: r4, media: i2, theme: l2, themeMap: typeof e4.themeMap == "object" && e4.themeMap || { ...n }, utils: typeof e4.utils == "object" && e4.utils || {} }, a2 = E(o2), c2 = { css: M(s2, a2), globalCss: D(s2, a2), keyframes: V(s2, a2), createTheme: J2(s2, a2), reset() {
        a2.reset(), c2.theme.toString();
      }, theme: {}, sheet: a2, config: s2, prefix: r4, getCssText: a2.toString, toString: a2.toString };
      return String(c2.theme = c2.createTheme(l2)), c2;
    });
    return t3 || r3.reset(), r3;
  })(e2);
  return t2.styled = (({ config: e3, sheet: t3 }) => Y(e3, () => {
    const r3 = M(e3, t3);
    return (...e4) => {
      const t4 = r3(...e4), n2 = t4[l].type, i2 = import_react5.default.forwardRef((e5, r4) => {
        const i3 = e5 && e5.as || n2, { props: o2, deferredInjector: l2 } = t4(e5);
        return delete o2.as, o2.ref = r4, l2 ? import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement(i3, o2), import_react5.default.createElement(l2, null)) : import_react5.default.createElement(i3, o2);
      });
      return i2.className = t4.className, i2.displayName = `Styled.${n2.displayName || n2.name || n2}`, i2.selector = t4.selector, i2.toString = () => t4.selector, i2[l] = t4[l], i2;
    };
  }))(t2), t2;
};
var K = () => X || (X = q());
var Q = (...e2) => K().createTheme(...e2);
var ee = (...e2) => K().keyframes(...e2);
var re = (...e2) => K().styled(...e2);

// node_modules/polished/dist/polished.esm.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/extends.js
init_react();
function _extends5() {
  _extends5 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_react();
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
init_react();
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
init_react();
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/construct.js
init_react();

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
init_react();
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}

// node_modules/polished/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
init_react();

// node_modules/polished/dist/polished.esm.js
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
  "12": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
  "13": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
  "14": 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "15": 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
  "70": 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
  "71": 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "72": 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
  "78": 'base must be set in "px" or "%" but you set it in "%s".\n'
};
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var a2 = args[0];
  var b2 = [];
  var c2;
  for (c2 = 1; c2 < args.length; c2 += 1) {
    b2.push(args[c2]);
  }
  b2.forEach(function(d2) {
    a2 = a2.replace(/%[a-z]/, d2);
  });
  return a2;
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (false) {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }
  if (saturation === 0) {
    return convert(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color) {
  if (typeof color !== "string")
    return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function reduceHexValue2(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value, saturation, lightness) {
  if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value, green, blue) {
  if (typeof value === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb2(color) {
  return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
};
var isRgba = function isRgba2(color) {
  return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && typeof color.alpha === "number";
};
var isHsl = function isHsl2(color) {
  return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
};
var isHsla = function isHsla2(color) {
  return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && typeof color.alpha === "number";
};
function toColorString(color) {
  if (typeof color !== "object")
    throw new PolishedError(8);
  if (isRgba(color))
    return rgba(color);
  if (isRgb(color))
    return rgb(color);
  if (isHsla(color))
    return hsla(color);
  if (isHsl(color))
    return hsl(color);
  throw new PolishedError(8);
}
function curried(f2, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function lighten(amount, color) {
  if (color === "transparent")
    return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends5({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten = /* @__PURE__ */ curry(lighten);
var curriedLighten$1 = curriedLighten;

// app/stitches/stitches.config.ts
var primaryLightTeal = "rgb(57, 153, 142)";
var stitches = q({
  theme: {
    colors: {
      black: "rgb(1, 38, 48)",
      white: "rgb(255, 255, 255)",
      lgray: "rgb(189, 189, 189)",
      dgray: "rgb(54, 54, 54)",
      blue: "rgb(16, 158, 201)",
      orange: "rgb(230, 155, 28)",
      lteal: primaryLightTeal,
      lteal2: curriedLighten$1(0.15, primaryLightTeal),
      dteal: "rgb(43, 77, 89)",
      text: "$white",
      body: "$white",
      bg: "$dteal",
      hamburger: "$white",
      tabText: "$lteal",
      tabBg: "$dteal",
      tabBorder: "$dteal",
      cardBg: "$lteal2",
      cardHighlight: "$black"
    },
    fonts: {
      body: "Quicksand, sans-serif",
      accent: "Poppins, sans-serif"
    },
    utils: {
      "grid-auto-fit": "repeat(auto-fit, minmax(520px, 1fr))"
    }
  }
});
var darkTheme = Q("dark", {
  colors: {
    black: "rgb(1, 38, 48)",
    white: "rgb(255, 255, 255)",
    lgray: "rgb(189, 189, 189)",
    dgray: "rgb(54, 54, 54)",
    blue: "rgb(16, 158, 201)",
    orange: "rgb(230, 155, 28)",
    lteal: primaryLightTeal,
    lteal2: curriedLighten$1(0.15, primaryLightTeal),
    dteal: "rgb(43, 77, 89)",
    text: "$black",
    body: "$black",
    bg: "$orange",
    hamburger: "$black",
    tabText: "$orange",
    tabBg: "$orange",
    tabBorder: "$orange",
    cardBg: "$black",
    cardHighlight: "$orange"
  }
});
var { theme, styled, getCssText } = stitches;

// app/stitches/index.ts
init_react();

export {
  Outlet,
  Link2 as Link,
  Links,
  Meta,
  Scripts,
  useLoaderData,
  useFetcher,
  LiveReload,
  RemixBrowser,
  ScrollRestoration,
  ClientStyleContext,
  ee,
  re,
  styled,
  getCssText
};
/**
 * @remix-run/react v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/_shared/chunk-LH2E6UCL.js.map
