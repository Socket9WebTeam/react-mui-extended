import { CircularProgress, Button, Alert, AlertTitle, IconButton, Menu, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Snackbar as Snackbar$1, InputAdornment, TextField } from '@mui/material';
import { css, jsx } from '@emotion/react';
import { MoreHoriz, ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, Fragment, useReducer, useEffect, createContext, useContext, useCallback } from 'react';

var loaderWrapperStyle$1 = function loaderWrapperStyle(theme) {
  return /*#__PURE__*/css("flex:1;display:flex;justify-content:center;align-items:center;min-height:", theme.spacing(20), ";" + (process.env.NODE_ENV === "production" ? "" : ";label:loaderWrapperStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VMb2FkZXIuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRytEIiwiZmlsZSI6IlBhZ2VMb2FkZXIuc3R5bGUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyV3JhcHBlclN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMjApfTtcbmA7XG4iXX0= */");
};

var PageLoader = function PageLoader() {
  return jsx("div", {
    css: loaderWrapperStyle$1,
    "data-testid": "PageLoader"
  }, jsx(CircularProgress, null));
};

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var loaderWrapperStyle = function loaderWrapperStyle(theme) {
  return /*#__PURE__*/css("align-self:center;display:flex;align-items:center;margin-right:", theme.spacing(1), ";" + (process.env.NODE_ENV === "production" ? "" : ";label:loaderWrapperStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbkxvYWRlci5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0QiLCJmaWxlIjoiQnV0dG9uTG9hZGVyLnN0eWxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcldyYXBwZXJTdHlsZTogU3R5bGVGdW5jdGlvbiA9ICh0aGVtZSkgPT4gY3NzYFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbmA7XG4iXX0= */");
};

var ButtonLoader = function ButtonLoader(_ref) {
  var isLoading = _ref.isLoading;
  if (!isLoading) return null;
  return jsx("span", {
    css: loaderWrapperStyle,
    "data-testid": "icon.buttonLoader"
  }, jsx(CircularProgress, {
    size: "1em"
  }));
};

var _excluded$2 = ["isLoading", "children", "disabled", "variant", "color"];
var ActionButton = function ActionButton(_ref) {
  var isLoading = _ref.isLoading,
    children = _ref.children,
    disabled = _ref.disabled,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return jsx(Button, _extends({}, props, {
    variant: variant,
    color: color,
    disabled: isLoading !== null && isLoading !== void 0 ? isLoading : disabled
  }), jsx(ButtonLoader, {
    isLoading: isLoading
  }), children);
};

var messageBoxContainerStyle = function messageBoxContainerStyle(theme) {
  return /*#__PURE__*/css("padding:", theme.spacing(3), ";margin:auto;" + (process.env.NODE_ENV === "production" ? "" : ";label:messageBoxContainerStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1lc3NhZ2VCb3guc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3FFIiwiZmlsZSI6Ik1lc3NhZ2VCb3guc3R5bGUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZUJveENvbnRhaW5lclN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gIG1hcmdpbjogYXV0bztcbmA7XG4iXX0= */");
};

var MessageBox = function MessageBox(_ref) {
  var title = _ref.title,
    description = _ref.description,
    _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? 'warning' : _ref$severity,
    action = _ref.action,
    testId = _ref.testId;
  return jsx("div", {
    css: messageBoxContainerStyle,
    "data-testid": testId
  }, jsx(Alert, {
    severity: severity,
    action: action
  }, jsx(AlertTitle, null, title), description));
};

var IconWithMenu = function IconWithMenu(_ref) {
  var children = _ref.children,
    iconButtonProps = _ref.iconButtonProps,
    _ref$icon = _ref.icon,
    IconComponent = _ref$icon === void 0 ? MoreHoriz : _ref$icon,
    testId = _ref.testId;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var closeMenu = function closeMenu() {
    return setAnchorEl(null);
  };
  return (
    // eslint-disable-next-line react/jsx-fragments
    jsx(Fragment, null, jsx(IconButton, _extends({
      "aria-haspopup": "true",
      onClick: function onClick(event) {
        return setAnchorEl(event.currentTarget);
      },
      size: "large",
      "data-testid": testId
    }, iconButtonProps), jsx(IconComponent, null)), jsx(Menu, {
      anchorEl: anchorEl,
      keepMounted: false,
      open: !!anchorEl,
      onClose: closeMenu
    }, children({
      closeMenu: closeMenu
    })))
  );
};

var defaultConfirmDialogProps = {
  buttonNoText: 'No',
  buttonYesText: 'Yes',
  testId: 'ConfirmDialog',
  buttonNoTestId: 'ConfirmDialogButtonNo',
  buttonYesTestId: 'ConfirmDialogButtonYes'
};
var ConfirmDialog = function ConfirmDialog(_ref) {
  var isOpen = _ref.isOpen,
    title = _ref.title,
    description = _ref.description,
    _ref$buttonNoText = _ref.buttonNoText,
    buttonNoText = _ref$buttonNoText === void 0 ? defaultConfirmDialogProps.buttonNoText : _ref$buttonNoText,
    _ref$buttonYesText = _ref.buttonYesText,
    buttonYesText = _ref$buttonYesText === void 0 ? defaultConfirmDialogProps.buttonYesText : _ref$buttonYesText,
    onClickNo = _ref.onClickNo,
    onClickYes = _ref.onClickYes,
    _ref$testId = _ref.testId,
    testId = _ref$testId === void 0 ? defaultConfirmDialogProps.testId : _ref$testId,
    _ref$buttonNoTestId = _ref.buttonNoTestId,
    buttonNoTestId = _ref$buttonNoTestId === void 0 ? defaultConfirmDialogProps.buttonNoTestId : _ref$buttonNoTestId,
    _ref$buttonYesTestId = _ref.buttonYesTestId,
    buttonYesTestId = _ref$buttonYesTestId === void 0 ? defaultConfirmDialogProps.buttonYesTestId : _ref$buttonYesTestId;
  return jsx(Dialog, {
    open: isOpen,
    "data-testid": testId,
    maxWidth: "xs"
  }, jsx(DialogTitle, null, title), jsx(DialogContent, null, jsx(DialogContentText, null, description)), jsx(DialogActions, null, jsx(Button, {
    color: "secondary",
    onClick: onClickNo,
    "data-testid": buttonNoTestId
  }, buttonNoText), jsx(Button, {
    onClick: onClickYes,
    "data-testid": buttonYesTestId
  }, buttonYesText)));
};

var defaultConfirmActionState = {
  isOpen: false,
  action: null
};
function useConfirmDialogAction() {
  var _useState = useState(defaultConfirmActionState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var closeDialog = function closeDialog() {
    return setState(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, {
        isOpen: false
      });
    });
  };
  var confirmDialogProps = {
    isOpen: state.isOpen,
    onClickNo: closeDialog,
    onClickYes: function onClickYes() {
      var _state$action;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (_state$action = state.action) === null || _state$action === void 0 ? void 0 : _state$action.call(state);
      closeDialog();
    }
  };

  // Open the dialog and set the callback to update the `onClickYes` prop
  var confirmAction = function confirmAction(actionFn) {
    setState({
      isOpen: true,
      action: actionFn
    });
  };
  return {
    confirmAction: confirmAction,
    confirmDialogProps: confirmDialogProps
  };
}

var defaultErrorMessageProps = {
  title: 'An error has occurred',
  description: 'There was an issue retrieving values from Squidex. Please try again',
  testId: 'ErrorMessageBox'
};
var ErrorMessage = function ErrorMessage(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? defaultErrorMessageProps.title : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? defaultErrorMessageProps.description : _ref$description,
    _ref$testId = _ref.testId,
    testId = _ref$testId === void 0 ? defaultErrorMessageProps.testId : _ref$testId;
  return jsx(MessageBox, {
    severity: "error",
    title: title,
    description: description,
    testId: testId
  });
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var wrapperStyle = function wrapperStyle(_ref) {
  var withBorder = _ref.withBorder;
  return function (theme) {
    return /*#__PURE__*/css("display:flex;justify-content:space-between;align-items:center;padding:", theme.spacing(2), ";border-bottom:", withBorder && "1px solid ".concat(theme.palette.divider), ";" + (process.env.NODE_ENV === "production" ? "" : ";label:wrapperStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VIZWFkZXIuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTU8iLCJmaWxlIjoiUGFnZUhlYWRlci5zdHlsZS50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdAL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyU3R5bGUgPVxuICAoeyB3aXRoQm9yZGVyIH06IHsgd2l0aEJvcmRlcj86IGJvb2xlYW4gfSk6IFN0eWxlRnVuY3Rpb24gPT5cbiAgKHRoZW1lKSA9PlxuICAgIGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGJvcmRlci1ib3R0b206ICR7d2l0aEJvcmRlciAmJiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWB9O1xuICAgIGA7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjc3NgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJhY2tCdXR0b25TdHlsZTogU3R5bGVGdW5jdGlvbiA9ICh0aGVtZSkgPT4gY3NzYFxuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBtaW4td2lkdGg6ICR7dGhlbWUuc3BhY2luZyg0LjUpfTtcbiAgcGFkZGluZzogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IGhlYWRlclN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25Db250YWluZXJTdHlsZTogU3R5bGVGdW5jdGlvbiA9ICh0aGVtZSkgPT4gY3NzYFxuICBmbGV4LXNocmluazogMDtcblxuICA+ICo6bm90KGZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIH1cbmA7XG4iXX0= */");
  };
};
var headerContainer = process.env.NODE_ENV === "production" ? {
  name: "745kf7",
  styles: "flex:1;display:flex;justify-content:flex-start;align-items:center;min-width:0"
} : {
  name: "4qownc-headerContainer",
  styles: "flex:1;display:flex;justify-content:flex-start;align-items:center;min-width:0;label:headerContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VIZWFkZXIuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tDIiwiZmlsZSI6IlBhZ2VIZWFkZXIuc3R5bGUudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlclN0eWxlID1cbiAgKHsgd2l0aEJvcmRlciB9OiB7IHdpdGhCb3JkZXI/OiBib29sZWFuIH0pOiBTdHlsZUZ1bmN0aW9uID0+XG4gICh0aGVtZSkgPT5cbiAgICBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBib3JkZXItYm90dG9tOiAke3dpdGhCb3JkZXIgJiYgYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gfTtcbiAgICBgO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3NzYFxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBiYWNrQnV0dG9uU3R5bGU6IFN0eWxlRnVuY3Rpb24gPSAodGhlbWUpID0+IGNzc2BcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgbWluLXdpZHRoOiAke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gIHBhZGRpbmc6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJTdHlsZTogU3R5bGVGdW5jdGlvbiA9ICh0aGVtZSkgPT4gY3NzYFxuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG5gO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uQ29udGFpbmVyU3R5bGU6IFN0eWxlRnVuY3Rpb24gPSAodGhlbWUpID0+IGNzc2BcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgPiAqOm5vdChmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var backButtonStyle = function backButtonStyle(theme) {
  return /*#__PURE__*/css("flex-shrink:0;margin-right:", theme.spacing(2), ";min-width:", theme.spacing(4.5), ";padding:5px;" + (process.env.NODE_ENV === "production" ? "" : ";label:backButtonStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VIZWFkZXIuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0I0RCIsImZpbGUiOiJQYWdlSGVhZGVyLnN0eWxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJTdHlsZSA9XG4gICh7IHdpdGhCb3JkZXIgfTogeyB3aXRoQm9yZGVyPzogYm9vbGVhbiB9KTogU3R5bGVGdW5jdGlvbiA9PlxuICAodGhlbWUpID0+XG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt3aXRoQm9yZGVyICYmIGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YH07XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgYmFja0J1dHRvblN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIG1pbi13aWR0aDogJHt0aGVtZS5zcGFjaW5nKDQuNSl9O1xuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyU3R5bGU6IFN0eWxlRnVuY3Rpb24gPSAodGhlbWUpID0+IGNzc2BcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNvbnRhaW5lclN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gID4gKjpub3QoZmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgfVxuYDtcbiJdfQ== */");
};
var headerStyle = function headerStyle(theme) {
  return /*#__PURE__*/css("margin-right:", theme.spacing(1), ";" + (process.env.NODE_ENV === "production" ? "" : ";label:headerStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VIZWFkZXIuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ3RCIsImZpbGUiOiJQYWdlSGVhZGVyLnN0eWxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJTdHlsZSA9XG4gICh7IHdpdGhCb3JkZXIgfTogeyB3aXRoQm9yZGVyPzogYm9vbGVhbiB9KTogU3R5bGVGdW5jdGlvbiA9PlxuICAodGhlbWUpID0+XG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt3aXRoQm9yZGVyICYmIGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YH07XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgYmFja0J1dHRvblN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIG1pbi13aWR0aDogJHt0aGVtZS5zcGFjaW5nKDQuNSl9O1xuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyU3R5bGU6IFN0eWxlRnVuY3Rpb24gPSAodGhlbWUpID0+IGNzc2BcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNvbnRhaW5lclN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gID4gKjpub3QoZmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgfVxuYDtcbiJdfQ== */");
};
var actionContainerStyle = function actionContainerStyle(theme) {
  return /*#__PURE__*/css("flex-shrink:0;>*:not(first-child){margin-left:", theme.spacing(2), ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:actionContainerStyle;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VIZWFkZXIuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNpRSIsImZpbGUiOiJQYWdlSGVhZGVyLnN0eWxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJTdHlsZSA9XG4gICh7IHdpdGhCb3JkZXIgfTogeyB3aXRoQm9yZGVyPzogYm9vbGVhbiB9KTogU3R5bGVGdW5jdGlvbiA9PlxuICAodGhlbWUpID0+XG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHt3aXRoQm9yZGVyICYmIGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YH07XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgYmFja0J1dHRvblN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIG1pbi13aWR0aDogJHt0aGVtZS5zcGFjaW5nKDQuNSl9O1xuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyU3R5bGU6IFN0eWxlRnVuY3Rpb24gPSAodGhlbWUpID0+IGNzc2BcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNvbnRhaW5lclN0eWxlOiBTdHlsZUZ1bmN0aW9uID0gKHRoZW1lKSA9PiBjc3NgXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gID4gKjpub3QoZmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgfVxuYDtcbiJdfQ== */");
};

var PageHeader = function PageHeader(_ref) {
  var header = _ref.header,
    actions = _ref.actions,
    onClickBackButton = _ref.onClickBackButton,
    withBorder = _ref.withBorder;
  return jsx("div", {
    css: wrapperStyle({
      withBorder: withBorder
    }),
    "data-testid": "PageHeaderWrapper"
  }, jsx("div", {
    css: headerContainer
  }, !!onClickBackButton && jsx(Button, {
    variant: "text",
    css: backButtonStyle,
    "data-testid": "button.pageHeaderBack",
    onClick: onClickBackButton
  }, jsx(ArrowBack, null)), jsx(Typography, {
    title: typeof header === 'string' ? header : undefined,
    component: "h1",
    variant: "h6",
    noWrap: true,
    css: headerStyle,
    "data-testid": "PageHeader"
  }, header)), !!actions && jsx("div", {
    css: actionContainerStyle,
    "data-testid": "PageHeaderActionContainer"
  }, actions));
};

var _excluded$1 = ["message", "onClose", "children", "severity", "variant", "autoHideDuration", "anchorOrigin"];
/**
 * Themed, auto closed Snackbar
 */
var Snackbar = function Snackbar(_ref) {
  var message = _ref.message,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? 'info' : _ref$severity,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
    _ref$autoHideDuration = _ref.autoHideDuration,
    autoHideDuration = _ref$autoHideDuration === void 0 ? 4000 : _ref$autoHideDuration,
    _ref$anchorOrigin = _ref.anchorOrigin,
    anchorOrigin = _ref$anchorOrigin === void 0 ? {
      vertical: 'top',
      horizontal: 'center'
    } : _ref$anchorOrigin,
    snackbarProps = _objectWithoutProperties(_ref, _excluded$1);
  return jsx(Snackbar$1, _extends({}, snackbarProps, {
    autoHideDuration: autoHideDuration,
    anchorOrigin: anchorOrigin
    /* This is for autoHideDuration to work */,
    onClose: onClose,
    "data-testid": "Snackbar"
  }), jsx(Alert, {
    variant: variant,
    severity: severity
    // This is for close button to appear automatically
    ,
    onClose: onClose,
    elevation: 6
  }, children !== null && children !== void 0 ? children : message));
};

var globalSnackbarInitialState = {
  isOpen: false,
  queue: []
};
var globalSnackbarReducer = function globalSnackbarReducer(state, action) {
  switch (action.type) {
    case 'open':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isOpen: true,
          queue: [].concat(_toConsumableArray(state.queue), [action.payload])
        });
      }
    case 'close':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isOpen: false
        });
      }
    case 'next':
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isOpen: true,
          queue: state.queue.slice(1) // get new array with the first item removed
        });
      }

    case 'reset':
      {
        return globalSnackbarInitialState;
      }
  }
};

var GlobalSnackbarContext = /*#__PURE__*/createContext(undefined);
// eslint-disable-next-line max-lines-per-function
var GlobalSnackbarProvider = function GlobalSnackbarProvider(_ref) {
  var children = _ref.children;
  var _useReducer = useReducer(globalSnackbarReducer, globalSnackbarInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var snackbarProps = state.queue[0];
  var hasNextSnackbar = state.queue.length > 1;

  // Auto close prev when there is next snackbar.
  // Per Google's guidelines (https://material.io/design/components/snackbars.html#snackbars-toasts-usage),
  // when a second snackbar is triggered while the first is displayed,
  // the first should start the contraction motion downwards before the second one animates upwards.
  //
  // so when snackbar is open and suddenly next snackbar is present
  // close currentSnackbar immediately
  useEffect(function () {
    if (state.isOpen && hasNextSnackbar) {
      dispatch({
        type: 'close'
      });
    }
  }, [dispatch, hasNextSnackbar, state.isOpen]);
  return jsx(GlobalSnackbarContext.Provider, {
    value: dispatch
  }, children, jsx(Snackbar, _extends({}, snackbarProps !== null && snackbarProps !== void 0 ? snackbarProps : {}, {
    open: state.isOpen && !!snackbarProps,
    onClose: function onClose(event, reason) {
      var _snackbarProps$onClos;
      // if reason is "clickaway" not the option is not send in, it will ignore it
      // Only when "closeOnClickAway" option is send in, it will auto close
      if (reason === 'clickaway' && !(snackbarProps !== null && snackbarProps !== void 0 && snackbarProps.closeOnClickAway)) return undefined;
      dispatch({
        type: 'close'
      });
      snackbarProps === null || snackbarProps === void 0 ? void 0 : (_snackbarProps$onClos = snackbarProps.onClose) === null || _snackbarProps$onClos === void 0 ? void 0 : _snackbarProps$onClos.call(snackbarProps, event, reason);
      return undefined;
    }
    // when the snackbar left the screen,
    // if there is nextSnackbar, then call it, if not reset everything
    ,
    TransitionProps: {
      onExited: function onExited() {
        return dispatch({
          type: hasNextSnackbar ? 'next' : 'reset'
        });
      }
    }
  })));
};

var useGlobalSnackbar = function useGlobalSnackbar() {
  var dispatch = useContext(GlobalSnackbarContext);
  if (dispatch === undefined) {
    throw new Error('useGlobalSnackbar() cannot be used outside GlobalSnackbarProvider');
  }
  return useCallback(function (payload) {
    return dispatch({
      type: 'open',
      payload: payload
    });
  }, [dispatch]);
};

var PasswordVisibilityIcon = function PasswordVisibilityIcon(_ref) {
  var isVisible = _ref.isVisible,
    onClick = _ref.onClick;
  return jsx(InputAdornment, {
    position: "end"
  }, jsx(IconButton, {
    "aria-label": "toggle password visibility",
    "data-testid": "button.passwordVisibility",
    onClick: onClick,
    size: "large"
  }, isVisible ? jsx(Visibility, {
    "data-testid": "icon.passwordVisible"
  }) : jsx(VisibilityOff, {
    "data-testid": "icon.passwordInvisible"
  })));
};

var _excluded = ["testId"];
var PasswordInput = function PasswordInput(_ref) {
  var _ref$testId = _ref.testId,
    testId = _ref$testId === void 0 ? 'input.password' : _ref$testId,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPasswordVisible = _useState2[0],
    setIsPasswordVisible = _useState2[1];
  return jsx(TextField, _extends({
    name: "password",
    label: "Password"
  }, props, {
    type: isPasswordVisible ? 'text' : 'password',
    inputProps: {
      'data-testid': testId
    },
    InputProps: {
      endAdornment: jsx(PasswordVisibilityIcon, {
        isVisible: isPasswordVisible,
        onClick: function onClick() {
          return setIsPasswordVisible(!isPasswordVisible);
        }
      })
    }
  }));
};

export { ActionButton, ConfirmDialog, ErrorMessage as ErrorMessageBox, GlobalSnackbarProvider, IconWithMenu, MessageBox, PageHeader, PageLoader, PasswordInput, Snackbar, useConfirmDialogAction, useGlobalSnackbar };
