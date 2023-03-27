import React from "react";
import {
  Container,
  ContainerWrap,
  HeaderParagraph,
  FlexContainer,
  FirstFlexContainer,
  SecondFlexContainer,
  ImgElement,
  PostContent,
} from "./style";
import trem from "../../Image/trem.jpg";
import Comments from "../comments/Comments";

const SinglePost = () => {
  // const [open, setOpen] = useState(false);
  // const handleClick = () => setOpen(!open);

  return (
    <Container>
      <ContainerWrap>
        <HeaderParagraph> Single Page Blog</HeaderParagraph>
        <FlexContainer>
          <FirstFlexContainer>
            <ImgElement src={trem} />
          </FirstFlexContainer>
          <SecondFlexContainer>
            <PostContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              distinctio deserunt, eius delectus perspiciatis quibusdam, quaerat
              blanditiis incidunt modi architecto atque repellendus dicta quod
              totam omnis error nobis laborum dolor amet cupiditate culpa nisi.
              Hic eum delectus libero consequuntur. Reprehenderit nemo enim
              aliquid numquam nulla modi, ipsum quidem impedit animi fuga
              eligendi officiis! Officiis dignissimos fugit reprehenderit
              laboriosam? Veritatis eum voluptate officia nihil nobis amet, non
              natus quis, maiores voluptatum impedit quia officiis aliquam
              aliquid totam blanditiis dolor. Maiores dolorem, voluptatem
              ratione repellendus iste laudantium explicabo repudiandae nobis
              harum accusantium cum incidunt aliquid maxime facilis eligendi
              neque perspiciatis ipsum? Vel blanditiis officia tempore voluptas
              quam, dignissimos, adipisci quos accusantium ea excepturi deserunt
              ut vitae nihil numquam. Officiis eum dicta assumenda consequatur,
              tempore atque cupiditate a odio nulla exercitationem alias ducimus
              consequuntur praesentium doloribus quaerat nesciunt sit error
              explicabo deleniti fuga aspernatur natus? Quod dignissimos quaerat
              eius ab beatae, vel, enim neque tenetur, tempore aliquid itaque
              recusandae et rerum eligendi natus!
            </PostContent>

            <Comments currentUserId="1" />
          </SecondFlexContainer>
        </FlexContainer>
      </ContainerWrap>
    </Container>
  );
};

export default SinglePost;
