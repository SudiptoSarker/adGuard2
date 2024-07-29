/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <FooterLinks>
        <LinkGroup>
          <FooterLink href="#">お問い合わせ</FooterLink>
          <Separator>｜</Separator>
          <FooterLink href="#">会員解除</FooterLink>
          <FooterLink href="#">mopita</FooterLink>
          <Separator>｜</Separator>
          <FooterLink href="#">動作環境</FooterLink>
          <Separator>｜</Separator>
          <FooterLink href="#">機能一覧</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <FooterLink href="#">販売規約</FooterLink>
          <Separator>｜</Separator>
          <FooterLink href="#">当社の個人情報保護方針</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <FooterLink href="#">本アプリのプライバシーポリシー</FooterLink>
          <Separator>｜</Separator>
          <FooterLink href="#">特定商取引法の表記</FooterLink>
        </LinkGroup>
      </FooterLinks>      
      <Copyright>
        <CopyrightText>© 株式会社エムティーアイ</CopyrightText>
        <CopyrightText>Graphics © Adguard</CopyrightText>
      </Copyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #585865;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 60px;
  color: #e3e3e5;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #e3e3e5;
  text-decoration: none;
  padding: 4px;
  font-family: Arial, sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  font-family: Arial, sans-serif;
`;

const Copyright = styled.div`
  background-color: #53535e;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  margin-top: 16px;
`;

const CopyrightText = styled.p`
  font-family: Arial, sans-serif;
  margin: 5px 0;
`;

export default Footer;