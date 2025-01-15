import React from "react";
import MemberOnly from "./MemberOnly";
import Sticky from "../elements/Sticky";
import Text from "../elements/Text";
import Unlock from "../elements/Unlock";
import Saying from "./Saying";

import { FaRegStar } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import Span from "../elements/Span";
import Card from "../elements/Card";

export default function Membership() {
  return (
    <div className="min-h-screen">
      <MemberOnly />
      <section className="flex flex-col md:flex-row gap-x-12 px-6 border-b border-secondary">
        <div className="md:sticky md:top-56">
          <Sticky>Why membership?</Sticky>
        </div>
        <section>
          <Text Head="Reward writers">
            Your membership directly supports the writers, editors, curators,
            and teams who make Medium a vibrant, inclusive home for human
            stories. A portion of your membership is allocated to the writers of
            the stories you read and interact with.
          </Text>
          <Text Head="Unlock every story">
            Get access to millions of original stories that spark bright ideas,
            answer big questions, and fuel bold ambitions.
          </Text>
          <Text Head="Enhance your reading experience">
            Immerse yourself in audio stories, read offline wherever you go, and
            connect with the Medium community on Mastodon.
          </Text>
          <Text Head="Elevate your writing">
            Create and contribute to publications to collaborate with other
            writers, create a custom domain for your profile, and level up your
            writing with our simple but powerful publishing tools.
          </Text>
          <Text Head="Support a mission that matters">
            Members are creating a world where original, human-crafted stories
            thrive. As a member-supported platform, quality comes first, not ads
            or clickbait.
          </Text>
        </section>
      </section>
      <section className="flex flex-col md:flex-row gap-x-12 px-6 border-b border-secondary">
        <div className="md:sticky md:top-56">
          <Sticky>What members are saying</Sticky>
        </div>
        <section className="flex flex-col gap-y-12 py-12">
          <Saying
            name={"Cassie Kozyrkov"}
            profesi={"Chief Decision Scientist at Google and Medium member"}
          >
            The easy path in social media is promoting the worst content, the
            cheapest, tackiest, lowest-effort stuff. That’s not what you get on
            Medium. You can actually find content you can build your brain with.
            I appreciate that, both as a reader and a writer.
          </Saying>
          <Saying
            name={"Enrique Dans"}
            profesi={
              "Professor of Innovation at IE Business School and Medium member"
            }
          >
            Medium has proved a game-changer for me, and quickly became the
            subscription I value the most, and I have quite a few. The cost is
            nothing compared to the value Medium generates for me month after
            month.
          </Saying>
          <Saying
            name={"Wenqi Glantz"}
            profesi={"Software Architect at ArisGlobal and Medium member"}
          >
            For us tech folks, Medium membership unlocks a whole treasure trove
            of high-quality articles. One good technology book could sell for
            over the Medium membership fee amount. It’s your choice whether to
            buy one book, or buy hundreds and thousands of books by unlocking
            member-only reading on Medium. Investing in a Medium membership is
            one of the best investments I have ever made for my career.
          </Saying>
        </section>
      </section>
      <section className="flex flex-col md:flex-row gap-x-12 px-6">
        <div className="md:sticky md:top-56">
          <Sticky>Membership plans</Sticky>
        </div>
        <section className="w-full flex flex-col md:flex-row justify-around gap-y-4 py-6">
          <Card
            Icon={<FaRegStar size={25} color="yellow" />}
            title="Medium Member"
            price="$5/month or $60/year"
          >
            <Span>Read member-only stories</Span>
            <Span>Support writers you read most</Span>
            <Span>Earn money for your writing</Span>
            <Span>Listen to audio narrations</Span>
            <Span>Read offline with the Medium app</Span>
            <Span>Access our Mastodon community</Span>
            <Span>Connect your custom domain</Span>
            <Span>Create your own publications</Span>
          </Card>
          <Card
            Icon={<GiSelfLove size={25} color="yellow" />}
            title="Friend of Medium"
            price="$15/month or $150/year"
          >
            <Span>All Medium member benefits</Span>
            <Span className={"font-semibold"}>
              Give 4x more to the writers you read
            </Span>
            <Span>
              Share member-only stories with <br /> anyone and drive more
              earnings for <br />
              writers
            </Span>
            <Span>Customize app icon</Span>
          </Card>
        </section>
      </section>
      <Unlock />
    </div>
  );
}
