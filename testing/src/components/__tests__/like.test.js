import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../Like";

describe("Like Component", () => {
  test("Muestra el valor inicial de likes como 0", () => {
    const { getByText } = render(<Like />);
    const likesParagraph = getByText("Likes: 0");
    expect(likesParagraph).toBeInTheDocument();
  });

  test("Incrementa el número de likes cuando se hace clic en 'Like'", () => {
    const { getByText } = render(<Like />);
    const likeButton = getByText("Like");
    fireEvent.click(likeButton);
    const likesParagraph = getByText("Likes: 1");
    expect(likesParagraph).toBeInTheDocument();
  });

  test("Decrementa el número de likes cuando se hace clic en 'Dislike'", () => {
    const { getByText } = render(<Like />);
    const dislikeButton = getByText("Dislike");
    fireEvent.click(dislikeButton);
    const likesParagraph = getByText("Likes: -1");
    expect(likesParagraph).toBeInTheDocument();
  });
});