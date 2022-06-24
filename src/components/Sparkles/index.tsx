import React, { CSSProperties, FC, ReactNode } from 'react';
import { random, range } from 'utils/utils';
import useRandomInterval from 'hooks/useRandomInterval';
import { ChildWrapper, SparkleSvg, SparkleWrapper, Wrapper } from './styles';

const DEFAULT_COLOR = '#FFC700';

const pickColor = (colors: string[]) => colors[random(0, colors.length - 1)];

const generateSparkle = (color: string) => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(15, 30),
  style: {
    top: random(-50, 90) + '%',
    left: random(-20, 100) + '%',
  },
});

type SparkleProps = {
  size: number;
  color: string;
  style?: CSSProperties;
};

const Sparkle: FC<SparkleProps> = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

type SparklesProps = {
  colors?: string[];
  delegated?: object;
  children: ReactNode;
};

const Sparkles: FC<SparklesProps> = ({ colors = [DEFAULT_COLOR], children, ...delegated }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(1, 3).map(() => generateSparkle(pickColor(colors)));
  });
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(pickColor(colors));
      setSparkles([...sparkles, sparkle]);
    },
    50,
    250,
  );

  useRandomInterval(
    () => {
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      setSparkles(nextSparkles);
    },
    50,
    550,
  );
  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default Sparkles;
