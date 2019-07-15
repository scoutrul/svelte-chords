import emotion from 'emotion/dist/emotion.umd.min.js';
const { css } = emotion;

export const steps__styles = {
    I: css`background: #9bf5cc`,
    II: css`background: #fd9cfd`,
    III: css`background: #cccdfd`,
    IV: css`background: #fffe9f`,
    V: css`background: #c4fc9b`,
    VI: css`background: #ff9d9e`,
    VII: css`background: #ffd508`,
};
export const steps__cell = css`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 80px;
    background: inherit;
    outline: 2px solid #DDD;
    outline-offset: -1px;
`;
export const steps__first = css`
    width: 40px;
`;
export const steps__container = css`
    display: flex;
    margin: 14px;
`;

export const getStepStyles = (roman) => steps__styles[roman];