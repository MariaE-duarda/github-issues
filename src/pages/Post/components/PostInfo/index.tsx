import {
  BackButton,
  PostInfoContainer,
  PostInfoFooter,
  PostInfoTitle,
} from "./styles";
import {
  faComment,
  faCalendarDay,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { iPost } from "../../../Blog";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { Spinner } from "../../../../components/Spinner";

interface PostInfoProps {
  data: iPost;
  isLoading: boolean;
}

export function PostInfo({ isLoading, data }: PostInfoProps) {
  const navigate = useNavigate();
  let formattedDate;

  if (!isLoading) {
    formattedDate = relativeDateFormatter(data.created_at);
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <BackButton onClick={goBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Back
            </BackButton>

            <ExternalLink
              text="Ver no GitHub"
              icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
              href={data.html_url}
              target="_blank"
            />
          </header>

          <PostInfoTitle>{data.title}</PostInfoTitle>

          <PostInfoFooter>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {data.user?.login}
              </li>

              <li>
                <FontAwesomeIcon icon={faCalendarDay} />
                {formattedDate}
              </li>

              <li>
                <FontAwesomeIcon icon={faComment} />
                {data.comments} Comments
              </li>
            </ul>
          </PostInfoFooter>
        </>
      )}
    </PostInfoContainer>
  );
}
