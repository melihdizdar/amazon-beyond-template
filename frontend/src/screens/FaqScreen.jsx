import React from 'react'
import AccordionItem from '../components/Faq/AccordionItem';
import AccordionWrapper from '../components/Faq/AccordionWrapper';
import "../screens/Styles/Faq/faq.css"
import "../components/Faq/Accordion.css"

export default function FaqScreen() {
    const data = [
        {
          "title": "How long have you been in business?",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla purus eget enim bibendum vestibulum. Morbi sit amet ultricies nibh. Vivamus quam est, ullamcorper eu interdum quis, malesuada sed magna. Cras nec eros eget orci ornare dignissim. Donec ac turpis quis nisi varius imperdiet in in erat."
        },
        {
          "title": "What makes you different from your competitors?",
          "description": "Donec euismod sollicitudin sollicitudin. Cras consectetur nisi auctor augue gravida imperdiet. Duis efficitur maximus nunc ut porta. Curabitur egestas metus lacus. Nulla viverra orci mi, vel maximus nisl facilisis in. Aliquam blandit rutrum tortor sed lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat porta hendrerit. Nunc vulputate accumsan mollis. Cras eget metus at ex lobortis tempus vitae eget neque."
        },
        {
          "title": "From where do you operate?",
          "description": "Curabitur dapibus dui eu massa gravida, ac luctus lorem tincidunt. Mauris urna lorem, volutpat eget turpis quis, hendrerit rutrum turpis. Pellentesque imperdiet, ipsum rutrum dapibus vehicula, eros nisl porta purus, nec fringilla sapien dolor vitae libero. Proin varius imperdiet est ac facilisis."
        },
        {
          "title": "Do you allow refunds for a change of mind? If so, how long do customers have to contact you?",
          "description": "Phasellus malesuada orci at arcu consequat mollis. Etiam sagittis pellentesque diam. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        },
        {
            "title": "Where are your packages shipped from?",
            "description": "Integer justo ipsum, bibendum ac volutpat vitae, hendrerit sed lectus. Ut luctus diam augue, eu cursus orci sagittis eget. In vehicula venenatis quam, sit amet congue quam. Mauris sed nisi eleifend, fermentum ipsum non, ultricies lectus. Morbi accumsan dictum tellus, vel cursus sapien gravida vel."
        },
        {
            "title": "What payment methods do you accept?",
            "description": "Vestibulum eu convallis eros. Vestibulum in leo non nunc cursus hendrerit pretium eu lectus. Morbi felis nisl, posuere ut nisl eget, varius sollicitudin nibh. Sed consectetur mi nisl, ac ultricies quam pharetra et. Vestibulum eros nisl, laoreet eget elementum et, commodo quis nibh. Donec malesuada tellus sit amet lectus ornare, nec tempor augue laoreet. Sed sit amet ipsum in erat luctus efficitur. Proin eros arcu, tincidunt sit amet leo id, sodales ultrices purus."
        },
        {
            "title": "Do you offer lay-bys? If so, can you provide a link to your terms and conditions?",
            "description": "Cras ligula dolor, convallis ut lectus eget, vulputate facilisis lacus. Ut feugiat, urna sit amet auctor sodales, sem sem dapibus orci, in posuere nibh est at sem. Suspendisse nulla nulla, pulvinar pulvinar accumsan nec, varius in ligula. In hac habitasse platea dictumst. Mauris eget velit nec tellus suscipit vestibulum ut id dolor."
        },
        {
            "title": "If you accept bank transfer, how long do customers have to make the payment before their order is cancelled and items returned to stock?",
            "description": "Quisque porta fringilla diam a blandit. Nulla ac egestas lorem. Proin aliquet feugiat turpis non vehicula. Donec dignissim sed orci laoreet tempus."
        },
        {
            "title": "Do you offer loyalty points or reward points, gift certificates, etc.?",
            "description": "Suspendisse nisl dui, gravida sit amet turpis sed, pretium vehicula libero. Aliquam erat volutpat. Morbi sodales diam iaculis iaculis suscipit. Aenean hendrerit, nulla a pharetra euismod, turpis dui semper neque, eget consectetur ante orci quis sapien. Nunc at leo purus. Aliquam eu nunc mauris."
        },
        {
            "title": "To where do you ship? How long does it take you to process an order before it is dispatched?",
            "description": "Nulla facilisi. Vestibulum faucibus tellus a lorem placerat, in ultricies mauris eleifend. Aliquam ac orci volutpat, iaculis sapien sit amet, placerat eros. Phasellus turpis urna, fringilla nec convallis ullamcorper, ultricies a odio. Praesent est enim, feugiat nec turpis pellentesque, vestibulum fermentum nunc. Pellentesque sed turpis nec nisl sollicitudin elementum. Sed in justo quis purus luctus pretium sed egestas augue."
        }
      ];
    return (
        <div className="faq">
        <div className="headerStage">
            <h4>FAQ</h4>
            <h1>I have a question for you?</h1>
        </div>
        <div className="content">
            <div className="faq-description">
                <AccordionWrapper>
                {data.map((item, index) => (
                    <AccordionItem key={index} index={index} title={item.title} description={item.description} />
                ))}
                </AccordionWrapper>
            </div>
        </div>
      </div>
    )
}
