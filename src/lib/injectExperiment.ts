import { placeAfter, placeBefore } from './placeHelpers';

/*
Injection functions for main experiment element,
must use any because it can be any HTML element
*/

export const replaceWithExperiment = (element: any, MainExperimentComponent: any): void => {
  const component = new MainExperimentComponent({
    target: element.parentElement,
    anchor: element,
  });
  element.remove();
};
export const placeExperimentAfter = (element: any, MainExperimentComponent: any): void => {
  const newExpEl = document.createElement('div');

  placeAfter(newExpEl, element);

  replaceContainer(MainExperimentComponent, {
    target: newExpEl,
  });
};

export const placeExperimentBefore = (element: any, MainExperimentComponent: any): void => {
  const newExpEl = document.createElement('div');

  placeBefore(newExpEl, element);

  replaceContainer(MainExperimentComponent, {
    target: newExpEl,
  });
};

const replaceContainer = function (Component, options) {
  const frag = document.createDocumentFragment();
  const component = new Component(Object.assign({}, options, { target: frag }));

  options.target.replaceWith(frag);

  return component;
};
