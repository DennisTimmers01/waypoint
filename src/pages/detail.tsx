import React from "react";
import Layout from "../components/layout";
import { VideoPlayer } from "../components/shared/VideoPlayer/Component";
import { Grid, Column } from "../components/shared/Grid/styles";
import { H2, Text } from "../components/shared/typography/Component";
import { ProjectImage } from "../components/shared/ProjectImage/styles";
import { ProjectHeader } from "../components/shared/ProjectHeader/styles";

export default function Project() {
  return (
    <Layout>
      <VideoPlayer />
      <ProjectHeader>
        <h2>asd</h2>
        <time>19/01/2020</time>
      </ProjectHeader>
      <Grid>
        <Column
          as="section"
          gridColumn={["auto / span 4", null, null, "3 / span 8"]}
        >
          <H2 textAlign={[null, null, null, "center"]}>Who we are</H2>
          <Text>
            Nullam a hendrerit diam. Nulla ultrices tortor ac metus imperdiet
            congue. Aliquam eleifend metus lacus, non faucibus lacus tristique
            vel. Duis eget risus libero. Mauris sed laoreet arcu, quis facilisis
            mauris. In consequat leo augue, sed ullamcorper diam vestibulum
            dignissim. Sed eleifend sem ex, ac consequat justo ullamcorper sed.
            Ut bibendum justo ac ultrices pellentesque. Nunc mi augue, semper ac
            luctus at, gravida quis velit. Aliquam quis euismod neque.
            Suspendisse maximus, nisl vitae tempor vulputate, erat dui feugiat
            turpis, et mattis felis ligula ac urna. Nam sollicitudin, sapien
            eget pharetra condimentum, ipsum neque porttitor felis, id feugiat
            felis lacus id magna. Cras ultrices nunc et nisi condimentum
            placerat. Donec eget turpis justo. Praesent sodales et turpis vel
            ultrices. Suspendisse a neque mattis, ultrices metus eu, finibus
            nisi.
          </Text>
        </Column>
        <Column
          as="section"
          gridColumn={["auto / span 4", null, null, "1 / span 12"]}
        >
          <ProjectImage>
            <div className="ProjectImage__img">
              <img src="https://source.unsplash.com/random" alt="bla" />
            </div>
            <H2 as="span" className="ProjectImage__caption">
              caption text
            </H2>
          </ProjectImage>
          <ProjectImage>
            <div className="ProjectImage__img">
              <img src="https://source.unsplash.com/random" alt="bla" />
            </div>
            <H2 as="span" className="ProjectImage__caption">
              caption text
            </H2>
          </ProjectImage>
          <ProjectImage>
            <div className="ProjectImage__img">
              <img src="https://source.unsplash.com/random" alt="bla" />
            </div>
            <H2 as="span" className="ProjectImage__caption">
              caption text
            </H2>
          </ProjectImage>
        </Column>
      </Grid>
    </Layout>
  );
}
