import React from "react";
import Layout from "../components/layout";
import { VideoPlayer } from "../components/shared/VideoPlayer/Component";
import { Grid, Column } from "../components/shared/Grid/styles";
import { H2, Text } from "../components/shared/typography/Component";
import { Slider } from "../components/shared/Slider/Component";
import { ProjectSlide } from "../components/shared/ProjectSlide/Component";
import { SubmitButton } from "../components/shared/Form/SubmitButton";
import { useForm } from "react-hook-form";
import { TextInput } from "../components/shared/Form/styles";

const IndexPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Layout>
      <VideoPlayer />
      <Grid>
        <Column
          as="section"
          gridColumn={["auto / span 4", null, null, "auto / span 5"]}
        >
          <H2>Who we are</H2>
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
          gridColumn={["auto / span 4", null, null, "8 / span 5"]}
        >
          <H2>Who we are</H2>
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
        {/* <Text gridColumn={["auto / span 4", null, null, "4 / span 6"]}>
          Nullam a hendrerit diam. Nulla ultrices tortor ac metus imperdiet
          congue. Aliquam eleifend metus lacus, non faucibus lacus tristique vel.
          Duis eget risus libero. Mauris sed laoreet arcu, quis facilisis mauris.
          In consequat leo augue, sed ullamcorper diam vestibulum dignissim. Sed
          eleifend sem ex, ac consequat justo ullamcorper sed. Ut bibendum justo
          ac ultrices pellentesque. Nunc mi augue, semper ac luctus at, gravida
          quis velit. Aliquam quis euismod neque. Suspendisse maximus, nisl vitae
          tempor vulputate, erat dui feugiat turpis, et mattis felis ligula ac
          urna. Nam sollicitudin, sapien eget pharetra condimentum, ipsum neque
          porttitor felis, id feugiat felis lacus id magna. Cras ultrices nunc et
          nisi condimentum placerat. Donec eget turpis justo. Praesent sodales et
          turpis vel ultrices. Suspendisse a neque mattis, ultrices metus eu,
          finibus nisi.
        </Text> */}
        <Column
          as="section"
          gridColumn={["auto / span 4", null, null, "1 / span 12"]}
        >
          <Slider>
            <div>
              <ProjectSlide
                title="Project_name"
                imageSrc="https://source.unsplash.com/random"
                imageAlt="project"
              />
            </div>
            <div>
              <ProjectSlide
                title="Project_name"
                imageSrc="https://source.unsplash.com/random"
                imageAlt="project"
              />
            </div>
            <div>
              <ProjectSlide
                title="Project_name"
                imageSrc="https://source.unsplash.com/random"
                imageAlt="project"
              />
            </div>
          </Slider>
        </Column>
        <Column
          as="section"
          gridColumn={["auto / span 4", null, null, "1 / span 12"]}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput htmlFor="first-name">
              <input
                id="first-name"
                className="TextInput__input"
                type="text"
                placeholder="First name"
                name="First name"
                ref={register({ required: true, maxLength: 80 })}
              />
              <span className="TextInput__label">Name</span>
            </TextInput>
            <TextInput htmlFor="email">
              <input
                placeholder="test"
                className="TextInput__input"
                type="email"
                name="Email"
                id="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <span className="TextInput__label">Email</span>
            </TextInput>
            <textarea name="Message" ref={register} />
            <SubmitButton />
          </form>
        </Column>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
