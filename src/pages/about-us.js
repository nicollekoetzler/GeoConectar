import styled from "@emotion/styled";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";

export default function AboutUs() {

  return (
    <>
      <HeaderLayout />
      <Background>
        <TopContainer>
          <h1>Sobre nós</h1>
        </TopContainer>
        <BottomContainer>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </BottomContainer>
        <BottomLayout/>
      </Background>
    </>
  )
}

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
  width: 100vw;
  font-family: "Roboto";
`;

const TopContainer = styled.div`
  width: 100%;
  background-color: #A5B167;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
      font-weight: 700;
      font-size: 42px;
      padding: 100px 0;
  }
`

const BottomContainer = styled.div`
  width: 62%;
  margin-top: 64px;
  color: #121212;

  p {
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 150%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 32px;
  }
`