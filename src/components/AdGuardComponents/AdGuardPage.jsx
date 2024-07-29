/**
 * This code was generated by Builder.io.
 */
'use client';
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Features from "./Features";
import PricingPlans from "./PricingPlans";
import Footer from "./Footer";

function AdGuardPage() {
  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Announcement>
          「イマドコサーチ」「ケータイお探しサービス」利用の皆さまへのお知らせ
        </Announcement>
        <Announcement>
          「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ
        </Announcement>
        <Features />
        <PurchaseSection>
          <SectionTitle>AdGuardの購入 または mopitaへのログイン</SectionTitle>
          <PurchaseInfo>
            ご利用をご希望の方は、<HighlightText>販売規約</HighlightText>および
            <HighlightText>AdGuardの利用規約</HighlightText>
            に同意して下記の「月額利用登録」より課金登録 (入会) を
            行ってください。登録完了後、即時ご利用いただけます。
          </PurchaseInfo>
          <LoginInfo>
            すでにAdGuardを購入済みの方は、下記の「mopitaにログイン」よりログインを行ってください。
          </LoginInfo>
          <PricingPlans />
          <LoginButton>mopitaにログイン</LoginButton>
          <TermsInfo>
            ・
            本サービスは、mopitaの会員ログイン・課金決済機能を利用しています。お支払いに関しては、mopitaが対応している決済方法、mopitaアカウントに登録されている支払い方法に準じます。
          </TermsInfo>
          <TermsInfo>
            ・
            本サービスは登録完了後から、解約まで1ヶ月ごとの自動契約更新となり、毎月月額料金がかかります。月の途中で本
            サービスを申し込んだ場合や解約した場合でも、月額料金満額をお支払いいただきます。
          </TermsInfo>
          <TermsInfo>
            ・ 解約手続きはサイト下部の会員解除より行ってください。
          </TermsInfo>
        </PurchaseSection>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9px;
`;

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Announcement = styled.div`
  color: #ff2001;
  padding: 10px;
  font: 400 20px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const PurchaseSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1086px;
  margin-top: 29px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #4a4a4a;
  font: 400 24px Acme, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PurchaseInfo = styled.p`
  text-align: center;
  color: #000;
  margin-top: 15px;
  font: 400 20px/24px Acme, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LoginInfo = styled.p`
  text-align: center;
  color: #000;
  margin-top: 15px;
  font: 400 20px Abel, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HighlightText = styled.span`
  color: #ff2001;
`;

const LoginButton = styled.button`
  border-radius: 4px;
  background-color: #66b574;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-weight: 700;
  text-align: center;
  padding: 9px 56px;
  font: 11px Arial, sans-serif;
  border: 1px solid #66b574;
  cursor: pointer;
  margin-top: 10px;
  @media (max-width: 991px) {
    padding: 9px 20px;
  }
`;

const TermsInfo = styled.p`
  color: #4a4a4a;
  padding: 10px;
  font: 400 20px/20px Abel, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default AdGuardPage;