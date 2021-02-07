const boxHeight = 400;
const circleSize = 30;
const markerBoxWidth = 2;
const markerWidth = markerBoxWidth / 2;
const circleBorderWidth = 6;
export const circlesData = {
  purchase: [
    {
      x: 50,
      y: boxHeight / 2,
      r: circleSize,
      title: "采购入库",
      href: "/marketing-purchase-in",
      auth: [47],
      icon_path: "https://cdn.lehuanj.com/erp-icons/purchase-in.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/purchase-in-disabled.svg",
      source: {
        x: 50 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 200 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 200,
      y: boxHeight / 2,
      r: circleSize,
      title: "采购审核",
      href: "/marketing-purchase-audit-list",
      auth: [61],
      icon_path: "https://cdn.lehuanj.com/erp-icons/review.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/review-disabled.svg",
      source: {
        x: 200 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 350 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 350,
      y: boxHeight / 2,
      r: circleSize,
      title: "仓库入库",
      href: "/pending-in-list",
      auth: [68, 69],
      icon_path: "https://cdn.lehuanj.com/erp-icons/stock-in.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/stock-in-disabled.svg",
      source: {
        x: 350 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 500 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 500,
      y: boxHeight / 2,
      r: circleSize,
      title: "完成入库",
      auth: [46],
      href: "/marketing-purchase-in-list",
      icon_path: "https://cdn.lehuanj.com/erp-icons/ends.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/ends-disabled.svg",
      source: [
        {
          x: 540 + circleSize / 2 - markerWidth - circleBorderWidth * 2,
          y: boxHeight / 2,
        },
        {
          x: 500 + circleSize,
          y: boxHeight / 2,
        },
      ],
      target: [
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 6 - markerWidth,
        },
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2,
        },
      ],
    },
    {
      x: 750,
      y: boxHeight / 6,
      r: circleSize,
      title: "采购换货",
      auth: [47],
      href: "/purchase-exchange",
      icon_path: "https://cdn.lehuanj.com/erp-icons/purchase-exchange.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/purchase-exchange-disabled.svg",
    },
    {
      x: 750,
      y: boxHeight / 2,
      r: circleSize,
      title: "采购退货",
      auth: [47],
      href: "/purchase-refund",
      icon_path: "https://cdn.lehuanj.com/erp-icons/purchase-refund.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/purchase-refund-disabled.svg",
    },
  ],

  sale: [
    {
      x: 50,
      y: boxHeight / 2,
      r: circleSize,
      title: "销售出库",
      href: "/sale",
      auth: [50],
      icon_path: "https://cdn.lehuanj.com/erp-icons/sale.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/sale-disabled.svg",
      source: {
        x: 50 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 200 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 200,
      y: boxHeight / 2,
      r: circleSize,
      title: "主管审核",
      href: "/sale-audit-list",
      auth: [62],
      icon_path: "https://cdn.lehuanj.com/erp-icons/review.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/review-disabled.svg",
      source: {
        x: 200 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 350 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 350,
      y: boxHeight / 2,
      r: circleSize,
      title: "仓库出库",
      href: "/pending-out-list",
      auth: [71, 72],
      icon_path: "https://cdn.lehuanj.com/erp-icons/stock-out.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/stock-out-disabled.svg",
      source: {
        x: 350 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 500 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 500,
      y: boxHeight / 2,
      r: circleSize,
      title: "完成出库",
      href: "/sale-list",
      auth: [49],
      icon_path: "https://cdn.lehuanj.com/erp-icons/ends.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/ends-disabled.svg",
      source: [
        {
          x: 540 + circleSize / 2 - markerWidth - circleBorderWidth * 2,
          y: boxHeight / 2,
        },
        {
          x: 500 + circleSize,
          y: boxHeight / 2,
        },
      ],
      target: [
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 6 - markerWidth,
        },
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2,
        },
      ],
    },
    {
      x: 750,
      y: boxHeight / 6,
      r: circleSize,
      title: "销售换货",
      auth: [50],
      href: "/sale-exchange",
      icon_path: "https://cdn.lehuanj.com/erp-icons/sale-exchange.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/sale-exchange-disabled.svg",
    },
    {
      x: 750,
      y: boxHeight / 2,
      r: circleSize,
      title: "销售退货",
      auth: [50],
      href: "/sale-refund",
      icon_path: "https://cdn.lehuanj.com/erp-icons/sale-refund.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/sale-refund-disabled.svg",
    },
  ],

  machining: [
    {
      x: 50,
      y: boxHeight / 2,
      r: circleSize,
      title: "加工出库",
      href: "/machining-out-quick",
      auth: [50],
      icon_path: "https://cdn.lehuanj.com/erp-icons/machining-out.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/machining-out-disabled.svg",
      source: [
        {
          x: 50 + circleSize,
          y: boxHeight / 2,
        },
        {
          x: 50 + circleSize,
          y: boxHeight / 2,
        },
      ],
      target: [
        {
          x: 300 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 4,
        },
        {
          x: 300 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2 + boxHeight / 4,
        },
      ],
    },
    {
      x: 300,
      y: boxHeight / 4,
      r: circleSize,
      title: "加工入库",
      href: "/machining-in-quick",
      auth: [77],
      icon_path: "https://cdn.lehuanj.com/erp-icons/machining-in.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/machining-in-disabled.svg",
      source: {
        x: 300 + circleSize,
        y: boxHeight / 4,
      },
      target: {
        x: 500 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 4,
      },
    },
    {
      x: 300,
      y: boxHeight / 2 + boxHeight / 4,
      r: circleSize,
      title: "加工退货",
      href: "/machining-cancel-quick",
      auth: [77],
      icon_path: "https://cdn.lehuanj.com/erp-icons/machining-cancel.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/machining-cancel-disabled.svg",
    },
    {
      x: 500,
      y: boxHeight / 4,
      r: circleSize,
      title: "加工返修",
      href: "/machining-rework-out-quick",
      auth: [77],
      icon_path: "https://cdn.lehuanj.com/erp-icons/machining-rework-out.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/machining-rework-out-disabled.svg",
      source: [
        {
          x: 500 + circleSize,
          y: boxHeight / 4,
        },
        {
          x: 540 + circleSize / 2 - markerWidth - circleBorderWidth * 2,
          y: boxHeight / 4,
        },
      ],
      target: [
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 4,
        },
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2,
        },
      ],
    },
    {
      x: 750,
      y: boxHeight / 4,
      r: circleSize,
      title: "返修入库",
      auth: [77],
      href: "/machining-in-quick",
      icon_path: "https://cdn.lehuanj.com/erp-icons/machining-rework-in.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/machining-rework-in-disabled.svg",
    },
    {
      x: 750,
      y: boxHeight / 2,
      r: circleSize,
      title: "返修退货",
      auth: [77],
      href: "/machining-cancel-quick",
      icon_path: "https://cdn.lehuanj.com/erp-icons/machining-rework-cancel.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/machining-rework-cancel-disabled.svg",
    },
  ],

  repair: [
    {
      x: 50,
      y: boxHeight / 2,
      r: circleSize,
      title: "维修出库",
      href: "/repair-out-quick",
      auth: [56],
      icon_path: "https://cdn.lehuanj.com/erp-icons/repair-out.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/repair-out-disabled.svg",
      source: [
        {
          x: 50 + circleSize,
          y: boxHeight / 2,
        },
        {
          x: 50 + circleSize,
          y: boxHeight / 2,
        },
      ],
      target: [
        {
          x: 300 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 4,
        },
        {
          x: 300 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2 + boxHeight / 4,
        },
      ],
    },
    {
      x: 300,
      y: boxHeight / 4,
      r: circleSize,
      title: "维修入库",
      href: "/repair-in-quick",
      auth: [56],
      icon_path: "https://cdn.lehuanj.com/erp-icons/repair-in.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/repair-in-disabled.svg",
      source: {
        x: 300 + circleSize,
        y: boxHeight / 4,
      },
      target: {
        x: 500 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 4,
      },
    },
    {
      x: 300,
      y: boxHeight / 2 + boxHeight / 4,
      r: circleSize,
      title: "维修退货",
      href: "/repair-cancel-quick",
      auth: [56],
      icon_path: "https://cdn.lehuanj.com/erp-icons/repair-cancel.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/repair-cancel-disabled.svg",
    },
    {
      x: 500,
      y: boxHeight / 4,
      r: circleSize,
      title: "维修返修",
      href: "/repair-rework-out-quick",
      auth: [56],
      icon_path: "https://cdn.lehuanj.com/erp-icons/repair-rework.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/repair-rework-cancel.svg",
      source: [
        {
          x: 500 + circleSize,
          y: boxHeight / 4,
        },
        {
          x: 540 + circleSize / 2 - markerWidth - circleBorderWidth * 2,
          y: boxHeight / 4,
        },
      ],
      target: [
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 4,
        },
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2,
        },
      ],
    },
    {
      x: 750,
      y: boxHeight / 4,
      r: circleSize,
      title: "返修入库",
      auth: [56],
      href: "/repair-in-quick",
      icon_path: "https://cdn.lehuanj.com/erp-icons/repair-rework-in.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/repair-rework-in.svg",
    },
    {
      x: 750,
      y: boxHeight / 2,
      r: circleSize,
      title: "返修退货",
      auth: [56],
      href: "/repair-cancel-quick",
      icon_path: "https://cdn.lehuanj.com/erp-icons/repair-rework-cancel.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/repair-rework-cancel-disabled.svg",
    },
  ],

  transfer: [
    {
      x: 50,
      y: boxHeight / 2,
      r: circleSize,
      title: "调拨出库",
      href: "/transfer-out-quick",
      auth: [58],
      icon_path: "https://cdn.lehuanj.com/erp-icons/transfer-out.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/transfer-out-disabled.svg",
      source: [
        {
          x: 50 + circleSize,
          y: boxHeight / 2,
        },
        {
          x: 50 + circleSize,
          y: boxHeight / 2,
        },
      ],
      target: [
        {
          x: 300 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 4,
        },
        {
          x: 300 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2 + boxHeight / 4,
        },
      ],
    },
    {
      x: 300,
      y: boxHeight / 4,
      r: circleSize,
      title: "调拨入库",
      href: "/transfer-in-pending",
      auth: [58],
      icon_path: "https://cdn.lehuanj.com/erp-icons/transfer-in.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/transfer-in-disabled.svg",
    },
    {
      x: 300,
      y: boxHeight / 2 + boxHeight / 4,
      r: circleSize,
      title: "取消调拨",
      href: "/transfer-cancel-pending",
      auth: [58],
      icon_path: "https://cdn.lehuanj.com/erp-icons/transfer-cancel.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/transfer-cancel-disabled.svg",
    },
  ],

  outsourcing: [
    {
      x: 50,
      y: boxHeight / 2,
      r: circleSize,
      title: "委外出库",
      href: "/outsourcing-out",
      auth: [79],
      icon_path: "https://cdn.lehuanj.com/erp-icons/outsourcing-out.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/outsourcing-out-disabled.svg",
      source: {
        x: 50 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 200 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 200,
      y: boxHeight / 2,
      r: circleSize,
      title: "委外审核",
      href: "/outsourcing-out-audit-list",
      auth: [82],
      icon_path: "https://cdn.lehuanj.com/erp-icons/review.svg",
      icon_path_2:
        "https://cdn.lehuanj.com/erp-icons/review-disabled.svg",
      source: {
        x: 200 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 350 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 350,
      y: boxHeight / 2,
      r: circleSize,
      title: "仓库出库",
      href: "/pending-out-list",
      auth: [71, 72],
      icon_path: "https://cdn.lehuanj.com/erp-icons/stock-out.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/stock-out-disabled.svg",
      source: {
        x: 350 + circleSize,
        y: boxHeight / 2,
      },
      target: {
        x: 500 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
        y: boxHeight / 2,
      },
    },
    {
      x: 500,
      y: boxHeight / 2,
      r: circleSize,
      title: "完成出库",
      auth: [79],
      href: "/outsourcing-out-list",
      icon_path: "https://cdn.lehuanj.com/erp-icons/ends.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/ends-disabled.svg",
      source: [
        {
          x: 540 + circleSize / 2 - markerWidth - circleBorderWidth * 2,
          y: boxHeight / 2,
        },
        {
          x: 500 + circleSize,
          y: boxHeight / 2,
        },
      ],
      target: [
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 6 - markerWidth,
        },
        {
          x: 750 - circleSize * 2 - markerWidth - circleBorderWidth * 1.4,
          y: boxHeight / 2,
        },
      ],
    },
    {
      x: 750,
      y: boxHeight / 6,
      r: circleSize,
      title: "委外退货",
      auth: [81],
      href: "/outsourcing-cancel",
      icon_path: "https://cdn.lehuanj.com/erp-icons/outsourcing-cancel.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/outsourcing-cancel-disabled.svg",
    },
    {
      x: 750,
      y: boxHeight / 2,
      r: circleSize,
      title: "委外入库",
      auth: [80],
      href: "/outsourcing-in",
      icon_path: "https://cdn.lehuanj.com/erp-icons/outsourcing-in.svg",
      icon_path_2: "https://cdn.lehuanj.com/erp-icons/outsourcing-in-disabled.svg",
    },
  ],
};
