import { wait } from '@app/lib/utils/wait';

type GetStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export async function getElementStyle(
  element: HTMLElement,
  property: GetStringKeys<CSSStyleDeclaration>,
  waitForChildrenLoad = true
): Promise<string> {
  let elementStyle = '';

  if (waitForChildrenLoad) {
    const promises: Promise<void>[] = [];
    const images = element.querySelectorAll('img');

    images.forEach((image) => {
      if (image.complete) {
        return;
      }

      promises.push(
        new Promise(
          (resolve) =>
            (image.onload = () => {
              resolve();
            })
        )
      );
    });

    if (promises.length) {
      await Promise.all(promises);
    }
  }

  do {
    const style = getComputedStyle(element);
    const currentElementStyle = style[property];

    if (currentElementStyle !== 'auto' && currentElementStyle !== elementStyle) {
      elementStyle = currentElementStyle;
    } else {
      await wait(10);
    }
  } while (!elementStyle);

  return elementStyle;
}

export async function getElementStyleNumber(
  element: HTMLElement,
  property: GetStringKeys<CSSStyleDeclaration>,
  waitForChildrenLoad?: boolean
): Promise<number> {
  const elementStyle = await getElementStyle(element, property, waitForChildrenLoad);

  const elementStyleNumber = Math.floor(parseFloat(elementStyle));

  if (isNaN(elementStyleNumber))
    console.warn(
      `Failed to get element style "${property}" for element "${element.tagName}", value: "${elementStyle}"`
    );

  return elementStyleNumber;
}
