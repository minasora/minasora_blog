import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who am I？',
    Svg: require('@site/static/img/skip-back.svg').default,
    description: (
      <>
        华中科技大学 管理学创新实验班 信息管理与信息系统方向。前商汤科技算法实习生。间歇性踌躇满志，持续性混吃等死。
      </>
    ),
  },
  {
    title: 'What I DO？',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        热爱galgame与ACG文化。编程爱好者。喜欢桌游以及P社。偶尔看看马经。
      </>
    ),
  },
  {
    title: 'Where I GO？',
    Svg: require('@site/static/img/skip-forward.svg').default,
    description: (
      <>
        日本东北大学研究生预订。计算机视觉方向。人生目标是享受过程以及躺平摆烂。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
