import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export const mockResource = () => {
  return {
    discounts: [
      {
        id: 1,
        valid: true,
        type: 'Quantity',
        product_type: 'Apple',
        value: 2,
        reward: 1,
      },
    ],
    prodWithDiscount: {
      id: 2,
      type: 'Apple',
      imageUrl:
        'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg',
      title: 'Apple - 2',
      description:
        'AppleLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
      price: 1,
    },
    prodWithoutDiscount: {
      id: 2,
      type: 'Banana',
      imageUrl:
        'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg',
      title: 'Banana',
      description:
        'AppleLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
      price: 2,
    },
    listResponse: {
      products: [
        {
          id: 1,
          type: 'Banana',
          imageUrl:
            'https://avectime.com/grocery&gourmet/agriculture/brands/images/gros_michel_banana/gros_michel_banana1.jpg',
          title: 'Banana - 1',
          description:
            'BananaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 2,
        },
        {
          id: 2,
          type: 'Apple',
          imageUrl:
            'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg',
          title: 'Apple - 2',
          description:
            'AppleLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 1,
        },
        {
          id: 3,
          type: 'Pineapple',
          imageUrl:
            'https://helios-i.mashable.com/imagery/articles/05W5DssM7oLPbBjiU4ZY6ob/hero-image.fill.size_1248x702.v1645798494.jpg',
          title: 'Pineapple - 3',
          description:
            'PineappleLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 5,
        },
        {
          id: 4,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 4',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 25,
        },
        {
          id: 5,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 5',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 2,
        },
        {
          id: 6,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 6',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 29,
        },
        {
          id: 7,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 7',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 15,
        },
        {
          id: 8,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 8',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 9,
        },
        {
          id: 9,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 9',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 17,
        },
        {
          id: 10,
          type: 'Other',
          imageUrl:
            'https://img.pixers.pics/pho_wat(s3:700/FO/78/15/78/42/700_FO78157842_1e837a4bfb4e3bdabed3afa8ae0e4361.jpg,700,465,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,415,jpg)/seitenschlaferkissen-frische-fruchte-mixed-fruits-background-dieting-gesunde-ernahrung.jpg.jpg',
          title: 'Other - 10',
          description:
            'OtherLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 21,
        },
      ],
      discounts: [
        {
          id: 53,
          valid: true,
          type: 'Quantity',
          product_type: 'Apple',
          value: 2,
          reward: 1,
        },
        {
          id: 54,
          valid: true,
          type: 'Price',
          product_type: 'Pineapple',
          value: 2,
          reward: 3,
        },
      ],
      total: 52,
    },
    cart: {
      products: {
        Banana: {
          id: 1,
          type: 'Banana',
          imageUrl:
            'https://avectime.com/grocery&gourmet/agriculture/brands/images/gros_michel_banana/gros_michel_banana1.jpg',
          title: 'Banana - 1',
          description:
            'BananaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 2,
          totalQuantity: 4,
          totalPrice: 8,
          discountPrice: 0,
          discountQuantity: 0,
          finalQuantity: 4,
          finalPrice: 8,
        },
        Apple: {
          id: 2,
          type: 'Apple',
          imageUrl:
            'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg',
          title: 'Apple - 2',
          description:
            'AppleLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ante purus, id fermentum nulla commodo vehicula. Nulla id volutpat lorem, et vehicula enim. Nam erat nunc, efficitur eget nibh at, euismod molestie justo. Nunc dictum euismod lacus nec varius. Sed efficitur dui et magna elementum pharetra. Proin ipsum mauris, pretium id tellus at, ultrices maximus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu dui, volutpat in sem vehicula, hendrerit lacinia elit. Nullam tristique augue non tempor efficitur. Nulla iaculis nibh at tortor pharetra, sit amet ornare lectus auctor. Sed nec sapien at est fermentum posuere. Fusce suscipit tristique velit, et consectetur nunc dignissim nec. Sed id ligula ut ante gravida ornare. Suspendisse eu odio lacus. Proin rhoncus convallis vehicula.',
          price: 1,
          totalQuantity: 4,
          totalPrice: 4,
          discountPrice: 0,
          discountQuantity: 2,
          finalQuantity: 6,
          finalPrice: 4,
        },
      },
      totalQuantity: 10,
      totalPrice: 12,
      totalUserQuantity: 8,
    },
  };
};
