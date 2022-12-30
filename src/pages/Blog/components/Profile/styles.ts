import styled from "styled-components";

export const ProfileContainer = styled.section`
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ProfileDetails = styled.div`
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 425px) {
    margin-top: 1rem;
  }
`;

export const ProfileName = styled.h1`
  color: ${(props) => props.theme["base-title"]};
`;

export const ProfileDescription = styled.span`
  margin-top: 0.5rem;
  display: block;

  @media (max-width: 425px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

export const ProfileInfo = styled.footer`
  margin-top: 1.5rem;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 425px) {
      justify-content: center;
    }

    li {
      color: ${(props) => props.theme["base-subtitle"]};

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
