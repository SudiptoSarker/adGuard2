/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Logo
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cec2d3120ca3c7f4e9b1ee6b80714aff60ee0249f19bec40ea3da45bb38b0421?apiKey=3041bfe48db34fff9838d53ac5a71114&&apiKey=3041bfe48db34fff9838d53ac5a71114"
        alt="AdGuard Logo"
      />
      <HeaderTitle>快適なウェブへ。</HeaderTitle>
      <HeaderDescription>
        AdGuardは、侵入型広告やオンライン追跡を取り除き、不正なソフトウェアからコンピュータを保護するための
        最良の方法です。AdGuardを使って速く安全で快適なインターネットをお楽しみください！
      </HeaderDescription>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  position: relative;
  min-height: 503px;
  width: 100%;
  align-items: start;
  color: #fff;
  font-weight: 400;
  padding: 29px 40px;
  background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/190608f74c2b6fed24652e31ffddce396599dd866c56d1a8f48def102e70074a?apiKey=3041bfe48db34fff9838d53ac5a71114&&apiKey=3041bfe48db34fff9838d53ac5a71114");
  background-size: cover;
  background-position: center;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 29px 20px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 4.55;
  object-fit: contain;
  width: 440px;
  max-width: 100%;
`;

const HeaderTitle = styled.h1`
  margin-top: 68px;
  font: 28px Abel, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const HeaderDescription = styled.p`
  margin: 68px 0 25px;
  font: 18px/31px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Header;
