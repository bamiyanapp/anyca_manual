<template>
  <div>
    <h3>レンタル料金計算フォーム</h3>
    <form @submit.prevent="calculateRental">
      <label>開始日時:
        <input type="datetime-local" v-model="startDateTime" required />
      </label>
      <br />
      <label>終了日時:
        <input type="datetime-local" v-model="endDateTime" required />
      </label>
      <br />
      <label>走行距離 (km):
        <input type="number" v-model.number="distance" required />
      </label>
      <br />
      <button type="submit">料金を計算</button>
    </form>
    <div v-if="rentalCost !== null">
      <p>レンタル料金: {{ rentalCost }} 円</p>
      <a :href="lineMessageUrl" target="_blank">LINEで問い合わせする</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseCost: {
      type: Number,
      default: 1000 // デフォルト値を設定
    },
    car: {
      type: String,
      required: true // 車両名称は必須の引数
    }
  },
  data() {
    return {
      startDateTime: '',
      endDateTime: '',
      distance: 0,
      rentalCost: null,
    };
  },
  methods: {
    calculateRental() {
      const start = new Date(this.startDateTime);
      const end = new Date(this.endDateTime);

      if (isNaN(start) || isNaN(end) || start >= end) {
        alert('有効な日付と時間を入力してください');
        return;
      }

      const timeDifference = end - start;
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      let dayCount = Math.ceil(hoursDifference / 24);

      // 24時間以内であれば1日分の料金
      if (hoursDifference <= 24) {
        dayCount = 1;
      }

      let totalCost = 0;
      const weekdayDiscount = 500; // 平日割引
      const consecutiveDiscount = 500; // 連続割引（2日目以降）
      const maxDailyDistance = 300; // 1日あたりの上限距離
      const excessDistanceCostPer100km = 1000; // 超過100kmごとの追加料金

      // 日ごとに料金を計算
      for (let i = 0; i < dayCount; i++) {
        let dailyCost = this.baseCost; // 引数から受け取った baseCost を使用

        // 平日割引の適用
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        const isWeekday = date.getDay() >= 1 && date.getDay() <= 5;
        if (isWeekday) {
          dailyCost -= weekdayDiscount;
        }

        // 連続割引の適用（2日目以降）
        if (i > 0) {
          dailyCost -= consecutiveDiscount;
        }

        totalCost += dailyCost;
      }

      // 距離超過分の計算
      const totalAllowedDistance = maxDailyDistance * dayCount;
      const excessDistance = Math.max(0, this.distance - totalAllowedDistance);
      const excessCost = Math.ceil(excessDistance / 100) * excessDistanceCostPer100km;

      // 最終レンタル料金を計算
      this.rentalCost = totalCost + excessCost;

      // LINEメッセージ用の情報生成
      const message = `レンタル料金試算結果:\n車両名称: ${this.car}\n開始日時: ${this.startDateTime}\n終了日時: ${this.endDateTime}\n走行距離: ${this.distance} km\n合計料金: ${this.rentalCost} 円`;
      const encodedMessage = encodeURIComponent(message);
      this.lineMessageUrl = `line://msg/text/${encodedMessage}`;      
    },
  },
};
</script>
