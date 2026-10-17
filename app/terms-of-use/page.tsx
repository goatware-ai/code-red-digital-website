import type { Metadata } from "next";
import Header from "@/components/SiteHeader";
import Footer from "@/components/SiteFooter";

export const metadata: Metadata = {
    title: "Terms of Use | Code Red Digital Solutions LLC",
    description:
        "Terms of Use governing access to and use of the Code Red Digital Solutions LLC website and services.",
};

export default function TermsOfUsePage() {
    return (
        <>
            <Header />

            <main className="legal-page">
                {/* Page Header */}
                <section className="legal-hero border-b border-gray-200 bg-gray-50">
                    <div className="mx-auto max-w-4xl px-6 py-20">
                        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                            Legal
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            Terms of Use
                        </h1>

                        <p className="mt-6 text-base leading-7 text-gray-600">
                            These Terms of Use govern your access to and use of
                            the Code Red Digital Solutions LLC website and
                            related online services.
                        </p>

                        <p className="mt-4 text-sm text-gray-500">
                            Last Updated: [LAST UPDATED DATE]
                        </p>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="legal-content pb-20 pt-8">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="prose prose-gray max-w-none">
                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                1. Acceptance of These Terms
                            </h3>

                            <p>
                                These Terms of Use (&quot;Terms&quot;) govern your access
                                to and use of the website operated by Code Red
                                Digital Solutions LLC (&quot;Code Red,&quot; &quot;we,&quot; &quot;us,&quot;
                                or &quot;our&quot;), including any content, features,
                                functionality, and services made available
                                through the website.
                            </p>

                            <p>
                                By accessing or using our website, you
                                acknowledge that you have read, understood, and
                                agree to be bound by these Terms and our Privacy
                                Policy.
                            </p>

                            <p>
                                If you do not agree with these Terms, you should
                                not access or use the website.
                            </p>

                            <p>
                                These Terms apply to website visitors,
                                prospective clients, clients, and other persons
                                who access or use the website, except where a
                                separate written agreement governs a particular
                                professional services engagement.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                2. Our Services
                            </h3>

                            <p>
                                Code Red provides technology consulting and
                                professional technology services, which may
                                include software development, full-stack
                                engineering, artificial intelligence and machine
                                learning solutions, cloud services, data
                                engineering, automation, systems integration,
                                technical consulting, and related services.
                            </p>

                            <p>
                                Information presented on this website is
                                provided for general informational purposes and
                                does not constitute a binding offer to provide
                                professional services.
                            </p>

                            <p>
                                Specific services, deliverables, fees,
                                schedules, responsibilities, intellectual
                                property rights, warranties, confidentiality
                                obligations, and other project terms may be
                                established in a separate written agreement,
                                proposal, statement of work, or other contract
                                between Code Red and a client.
                            </p>

                            <p>
                                In the event of a conflict between these Terms
                                and a separate written agreement governing a
                                specific client engagement, the applicable
                                written agreement will control with respect to
                                that engagement.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                3. Website Use
                            </h3>

                            <p>
                                You may use our website only for lawful purposes
                                and in accordance with these Terms.
                            </p>

                            <p>
                                You agree not to:
                            </p>

                            <ul>
                                <li>
                                    Use the website in violation of applicable
                                    federal, state, local, or international
                                    laws or regulations
                                </li>
                                <li>
                                    Attempt to gain unauthorized access to our
                                    website, systems, networks, accounts, or
                                    infrastructure
                                </li>
                                <li>
                                    Interfere with or disrupt the operation,
                                    security, or availability of the website
                                </li>
                                <li>
                                    Introduce malicious code, malware, viruses,
                                    or other harmful or destructive material
                                </li>
                                <li>
                                    Use automated systems, bots, crawlers, or
                                    scraping technologies in a manner that
                                    imposes an unreasonable burden on the
                                    website or violates applicable restrictions
                                </li>
                                <li>
                                    Attempt to reverse engineer, decompile,
                                    disassemble, or otherwise derive source code
                                    from technology made available through the
                                    website, except where permitted by law
                                </li>
                                <li>
                                    Impersonate another person or entity or
                                    misrepresent your affiliation with a person
                                    or organization
                                </li>
                                <li>
                                    Submit information that is knowingly false,
                                    misleading, fraudulent, defamatory, or
                                    unlawful
                                </li>
                                <li>
                                    Use the website to infringe or violate the
                                    intellectual property, privacy, or other
                                    rights of another person or entity
                                </li>
                            </ul>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                4. User Communications and Submissions
                            </h3>

                            <p>
                                If you submit information, messages, project
                                descriptions, feedback, questions, or other
                                materials through our website or other
                                communications channels (&quot;Submissions&quot;), you
                                represent that you have the right to provide
                                those materials and that doing so does not
                                violate any law or third-party rights.
                            </p>

                            <p>
                                You should not submit confidential information,
                                trade secrets, credentials, regulated data, or
                                other sensitive information through a public
                                website form unless Code Red has specifically
                                instructed you to do so through an appropriate
                                secure channel.
                            </p>

                            <p>
                                Unless otherwise agreed in writing, submitting
                                information to Code Red does not create a
                                client relationship, confidentiality obligation,
                                partnership, joint venture, employment
                                relationship, or other contractual relationship.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                5. Intellectual Property
                            </h3>

                            <p>
                                The website and its content, including text,
                                graphics, logos, designs, photographs,
                                illustrations, software, code, layout, and
                                other materials, are owned by Code Red or its
                                licensors and are protected by applicable
                                intellectual property laws.
                            </p>

                            <p>
                                Except as expressly permitted by these Terms or
                                applicable law, you may not reproduce,
                                distribute, modify, publicly display, publicly
                                perform, publish, transmit, sell, license,
                                create derivative works from, or otherwise
                                exploit website content without our prior written
                                permission.
                            </p>

                            <p>
                                &quot;Code Red,&quot; our logos, names, branding, and
                                related marks may not be used without prior
                                written permission.
                            </p>

                            <p>
                                Intellectual property created specifically for a
                                client as part of a professional services
                                engagement will be governed by the applicable
                                written agreement between Code Red and that
                                client.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                6. Third-Party Services and Links
                            </h3>

                            <p>
                                Our website may contain links to third-party
                                websites, services, platforms, applications, or
                                resources.
                            </p>

                            <p>
                                These links are provided for convenience and
                                informational purposes. Code Red does not
                                control and is not responsible for the
                                availability, content, security, privacy
                                practices, or terms of third-party websites or
                                services.
                            </p>

                            <p>
                                Your use of third-party services is subject to
                                the applicable terms and policies of those
                                third parties. You are responsible for reviewing
                                those terms before using a third-party service.
                            </p>

                            <p>
                                Code Red is not responsible for any loss,
                                damage, or dispute arising from your
                                relationship with a third-party service
                                provider, except to the extent otherwise
                                required by applicable law.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                7. Artificial Intelligence and Technology
                                Information
                            </h3>

                            <p>
                                Our website may describe artificial intelligence,
                                machine learning, software, cloud computing,
                                automation, data engineering, cybersecurity,
                                and other technologies.
                            </p>

                            <p>
                                Technology information provided on the website
                                is intended for general informational purposes.
                                Specific capabilities, performance, results,
                                security characteristics, compatibility, or
                                suitability may vary depending on the technology,
                                implementation, environment, data, requirements,
                                and other circumstances.
                            </p>

                            <p>
                                Nothing on this website should be interpreted as
                                a guarantee that a particular technology,
                                architecture, implementation, or business
                                outcome will be suitable for a particular
                                purpose.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                8. Client Projects and Professional Services
                            </h3>

                            <p>
                                Services provided by Code Red to a client may
                                involve access to client systems, applications,
                                infrastructure, source code, data, credentials,
                                documentation, or other business information.
                            </p>

                            <p>
                                The rights and responsibilities associated with
                                such information will be governed by the
                                applicable professional services agreement,
                                statement of work, confidentiality agreement,
                                data processing agreement, security requirements,
                                or other written agreement between Code Red and
                                the client.
                            </p>

                            <p>
                                Clients are responsible for ensuring that they
                                have the necessary rights, permissions, licenses,
                                consents, and authorizations for information,
                                systems, data, software, and other materials
                                provided to Code Red.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                9. Availability of the Website
                            </h3>

                            <p>
                                We may modify, suspend, restrict, or discontinue
                                any portion of the website at any time, with or
                                without notice.
                            </p>

                            <p>
                                We do not guarantee that the website will always
                                be available, uninterrupted, secure, timely,
                                accurate, complete, or error-free.
                            </p>

                            <p>
                                Website availability may be affected by
                                maintenance, updates, technical problems,
                                telecommunications failures, third-party
                                services, internet infrastructure, cybersecurity
                                incidents, or circumstances outside our
                                reasonable control.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                10. Disclaimer of Warranties
                            </h3>

                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
                                LAW, THE WEBSITE AND ITS CONTENT ARE PROVIDED ON
                                AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT
                                WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED,
                                STATUTORY, OR OTHERWISE.
                            </p>

                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CODE RED
                                DISCLAIMS WARRANTIES OF MERCHANTABILITY, FITNESS
                                FOR A PARTICULAR PURPOSE, TITLE,
                                NON-INFRINGEMENT, ACCURACY, RELIABILITY, AND
                                AVAILABILITY.
                            </p>

                            <p>
                                CODE RED DOES NOT WARRANT THAT THE WEBSITE OR
                                ITS CONTENT WILL MEET YOUR REQUIREMENTS, OPERATE
                                WITHOUT INTERRUPTION, BE SECURE OR ERROR-FREE,
                                OR THAT DEFECTS WILL BE CORRECTED.
                            </p>

                            <p>
                                Nothing in these Terms excludes or limits any
                                warranty or legal right that cannot lawfully be
                                excluded or limited.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                11. Limitation of Liability
                            </h3>

                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
                                LAW, CODE RED DIGITAL SOLUTIONS LLC AND ITS
                                OWNERS, MEMBERS, MANAGERS, OFFICERS, EMPLOYEES,
                                CONTRACTORS, CONSULTANTS, AGENTS, AND SERVICE
                                PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY,
                                OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO
                                YOUR ACCESS TO OR USE OF THE WEBSITE OR ITS
                                CONTENT.
                            </p>

                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CODE
                                RED&apos;S TOTAL LIABILITY ARISING OUT OF OR RELATED
                                TO YOUR USE OF THE WEBSITE WILL NOT EXCEED
                                [LIABILITY CAP / APPLICABLE CONTRACTUAL AMOUNT].
                            </p>

                            <p>
                                The limitations in this section do not apply to
                                liability that cannot legally be excluded or
                                limited under applicable law.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                12. Indemnification
                            </h3>

                            <p>
                                To the extent permitted by applicable law, you
                                agree to defend, indemnify, and hold harmless
                                Code Red Digital Solutions LLC and its owners,
                                members, managers, officers, employees,
                                contractors, consultants, agents, and service
                                providers from claims, liabilities, damages,
                                losses, costs, and expenses, including reasonable
                                attorneys&apos; fees, arising out of or related to:
                            </p>

                            <ul>
                                <li>
                                    Your violation of these Terms
                                </li>
                                <li>
                                    Your unlawful or unauthorized use of the
                                    website
                                </li>
                                <li>
                                    Your violation of another person&apos;s or
                                    entity&apos;s rights
                                </li>
                                <li>
                                    Information or materials you submit that
                                    infringe or violate third-party rights
                                </li>
                                <li>
                                    Your fraud, negligence, or willful
                                    misconduct
                                </li>
                            </ul>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                13. Privacy
                            </h3>

                            <p>
                                Your use of the website is also subject to our
                                Privacy Policy, which explains how Code Red
                                collects, uses, discloses, retains, and protects
                                personal information.
                            </p>

                            <p>
                                Please review our{" "}
                                <a
                                    href="/privacy-policy"
                                    className="font-medium text-red-600 hover:text-red-700"
                                >
                                    Privacy Policy
                                </a>{" "}
                                for additional information about our privacy
                                practices.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                14. Electronic Communications
                            </h3>

                            <p>
                                When you communicate with Code Red
                                electronically, including by email or through
                                our website, you consent to receive
                                communications electronically where permitted by
                                applicable law.
                            </p>

                            <p>
                                You agree that electronic communications,
                                notices, disclosures, and agreements may satisfy
                                legal requirements that such communications be
                                provided in writing, except where applicable law
                                requires another form of communication.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                15. Termination and Suspension
                            </h3>

                            <p>
                                We may suspend or restrict your access to the
                                website if we reasonably believe that you have
                                violated these Terms, applicable law, or the
                                rights of Code Red or another party.
                            </p>

                            <p>
                                We may also suspend or restrict access where
                                necessary to protect the security, integrity,
                                availability, or operation of our website,
                                systems, or services.
                            </p>

                            <p>
                                We may discontinue the website or any portion of
                                it at any time.
                            </p>

                            <p>
                                Provisions of these Terms that by their nature
                                should survive termination will remain in effect,
                                including provisions concerning intellectual
                                property, disclaimers, limitations of liability,
                                indemnification, governing law, dispute
                                resolution, and other applicable provisions.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                16. Dispute Resolution
                            </h3>

                            <p>
                                Before initiating formal legal proceedings
                                relating to these Terms or the website, the
                                parties agree to make reasonable efforts to
                                resolve the dispute informally.
                            </p>

                            <p>
                                A party seeking to raise a dispute should first
                                provide written notice describing the nature of
                                the dispute and the requested resolution to:
                            </p>

                            <p>
                                <strong>
                                    [LEGAL / DISPUTE NOTICE EMAIL]
                                </strong>
                                <br />
                                [LEGAL NOTICE MAILING ADDRESS]
                            </p>

                            <p>
                                The parties will make reasonable efforts to
                                resolve the dispute within [DISPUTE RESOLUTION
                                PERIOD] days after receipt of written notice.
                            </p>

                            <p>
                                If the dispute cannot be resolved informally,
                                any arbitration, court proceeding, mediation
                                requirement, or other formal dispute-resolution
                                process will be governed by the following
                                provisions:
                            </p>

                            <p>
                                [INSERT FINAL DISPUTE RESOLUTION / ARBITRATION
                                PROVISION AFTER LEGAL REVIEW]
                            </p>

                            <p>
                                <strong>
                                    Important: Any arbitration provision,
                                    class-action waiver, jury-trial waiver, or
                                    mandatory venue provision should be reviewed
                                    and approved by qualified legal counsel
                                    before publication.
                                </strong>
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                17. Governing Law and Venue
                            </h3>

                            <p>
                                These Terms will be governed by the laws of
                                [GOVERNING STATE], without regard to its
                                conflict-of-law principles, except to the extent
                                applicable law requires otherwise.
                            </p>

                            <p>
                                Subject to any applicable arbitration or other
                                dispute-resolution provision, any legal action
                                arising out of or relating to these Terms or the
                                website will be brought in the courts located in
                                [COUNTY, STATE], and you consent to the
                                jurisdiction and venue of those courts.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                18. Force Majeure
                            </h3>

                            <p>
                                Code Red will not be responsible for delays,
                                interruptions, failures, or inability to
                                perform caused by circumstances beyond our
                                reasonable control.
                            </p>

                            <p>
                                Such circumstances may include natural
                                disasters, acts of government, war, terrorism,
                                civil unrest, labor disputes, internet or
                                telecommunications failures, power failures,
                                cybersecurity incidents, failures of third-party
                                infrastructure, or other events outside our
                                reasonable control.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                19. Assignment
                            </h3>

                            <p>
                                You may not assign, transfer, or delegate your
                                rights or obligations under these Terms without
                                our prior written consent, except where
                                otherwise permitted by applicable law.
                            </p>

                            <p>
                                Code Red may assign or transfer these Terms, in
                                whole or in part, in connection with a merger,
                                acquisition, corporate restructuring, sale of
                                assets, or similar transaction, or to an
                                affiliated entity or successor.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                20. No Waiver
                            </h3>

                            <p>
                                Our failure to enforce any provision of these
                                Terms does not constitute a waiver of that
                                provision or our right to enforce it in the
                                future.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                21. Severability
                            </h3>

                            <p>
                                If any provision of these Terms is determined to
                                be invalid, unlawful, or unenforceable, that
                                provision will be enforced to the maximum extent
                                permitted by law and the remaining provisions
                                will remain in full force and effect.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                22. Entire Agreement
                            </h3>

                            <p>
                                These Terms, together with our Privacy Policy
                                and any other policies expressly incorporated by
                                reference, constitute the entire agreement
                                between you and Code Red regarding your use of
                                the website, except where a separate written
                                agreement governs a professional services
                                engagement.
                            </p>

                            <p>
                                These Terms supersede prior communications or
                                understandings concerning your use of the
                                website, except where expressly stated otherwise.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                23. Changes to These Terms
                            </h3>

                            <p>
                                Code Red may update these Terms from time to
                                time to reflect changes to our website,
                                services, business practices, technology, or
                                applicable legal requirements.
                            </p>

                            <p>
                                When changes are made, we will update the &quot;Last
                                Updated&quot; date displayed at the beginning of these
                                Terms.
                            </p>

                            <p>
                                Your continued use of the website after revised
                                Terms are posted constitutes acceptance of the
                                revised Terms to the extent permitted by
                                applicable law.
                            </p>

                            <p>
                                If a change materially affects your rights or
                                obligations, we may provide additional notice
                                where required by applicable law.
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                24. Contact Us
                            </h3>

                            <p>
                                If you have questions about these Terms of Use,
                                please contact Code Red Digital Solutions LLC:
                            </p>

                            <p>
                                <strong>
                                    Code Red Digital Solutions LLC
                                </strong>
                                <br />
                                [BUSINESS ADDRESS]
                                <br />
                                [CITY, STATE ZIP]
                                <br />
                                [LEGAL / CONTACT EMAIL]
                                <br />
                                [PHONE NUMBER]
                            </p>

                            <p>
                                For legal notices or formal dispute notices,
                                please use:
                            </p>

                            <p>
                                <strong>
                                    [LEGAL NOTICE EMAIL]
                                </strong>
                                <br />
                                [LEGAL NOTICE MAILING ADDRESS]
                            </p>

                            <h3 className="my-4 text-xl tracking-tight text-gray-900">
                                25. Important Legal Notice
                            </h3>

                            <p>
                                These Terms of Use are intended to provide a
                                comprehensive framework for use of the Code Red
                                website. They are not a substitute for legal
                                advice and should be reviewed by qualified legal
                                counsel before being adopted as the company&apos;s
                                final terms.
                            </p>

                            <p>
                                Separate professional services agreements should
                                be used where appropriate for client engagements,
                                particularly where the engagement involves
                                client data, confidential information, source
                                code, production systems, regulated information,
                                security requirements, intellectual property,
                                service levels, warranties, or other material
                                contractual obligations.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}