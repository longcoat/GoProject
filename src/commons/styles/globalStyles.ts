import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: myfont;
  }

  a {
    text-decoration: none;
    color: white;

    :visited {
      color: white;
    }
  }
`;
