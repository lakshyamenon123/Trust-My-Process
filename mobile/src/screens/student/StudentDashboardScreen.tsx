import { ScrollView, Text, View, Pressable, StyleSheet } from 'react-native'
import { Flame, ChevronRight, Star } from 'lucide-react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import Card from '../../components/Card'
import IconBadge from '../../components/IconBadge'
import LevelBar from '../../components/LevelBar'
import { studentProfile, interests, strengths, careers } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList, StudentTabParamList } from '../../navigation/types'

type Props = CompositeScreenProps<
  BottomTabScreenProps<StudentTabParamList, 'Dashboard'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function StudentDashboardScreen({ navigation }: Props) {
  const topInterest = interests[0]
  const topStrength = strengths[0]
  const topCareer = careers[0]
  const xpPct = Math.round((studentProfile.xp / studentProfile.xpToNext) * 100)

  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{studentProfile.initials}</Text>
        </View>
        <View style={styles.profileBody}>
          <Text style={styles.profileName}>{studentProfile.name}</Text>
          <Text style={styles.profileGrade}>{studentProfile.grade}</Text>
        </View>
        <View style={styles.streak}>
          <Flame size={16} color={colors.highlight} />
          <Text style={styles.streakText}>{studentProfile.streak}</Text>
        </View>
      </Card>

      <Card>
        <View style={styles.levelRow}>
          <View style={styles.levelBadge}>
            <Star size={14} color={colors.white} />
            <Text style={styles.levelBadgeText}>Level {studentProfile.level}</Text>
          </View>
          <Text style={styles.xpText}>{studentProfile.xp} / {studentProfile.xpToNext} XP</Text>
        </View>
        <LevelBar value={xpPct} color={colors.primary} />
      </Card>

      <Pressable onPress={() => navigation.navigate('InterestDetail', { id: topInterest.id })}>
        <Card style={styles.highlightRow}>
          <IconBadge icon={topInterest.icon} />
          <View style={styles.body}>
            <Text style={styles.eyebrow}>Top interest</Text>
            <Text style={styles.title}>{topInterest.title}</Text>
          </View>
          <ChevronRight size={20} color={colors.muted} />
        </Card>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('StrengthDetail', { id: topStrength.id })}>
        <Card style={styles.highlightRow}>
          <IconBadge icon={topStrength.icon} color={colors.accent} />
          <View style={styles.body}>
            <Text style={styles.eyebrow}>Top strength</Text>
            <Text style={styles.title}>{topStrength.subject}</Text>
          </View>
          <ChevronRight size={20} color={colors.muted} />
        </Card>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('CareerDetail', { id: topCareer.id })}>
        <Card style={styles.highlightRow}>
          <IconBadge icon={topCareer.icon} color={colors.primaryDeep} />
          <View style={styles.body}>
            <Text style={styles.eyebrow}>Career match</Text>
            <Text style={styles.title}>{topCareer.title} · {topCareer.matchPct}%</Text>
          </View>
          <ChevronRight size={20} color={colors.muted} />
        </Card>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Explore')}>
        <View style={styles.exploreCta}>
          <Text style={styles.exploreCtaText}>Explore all interests, strengths & careers</Text>
          <ChevronRight size={18} color={colors.white} />
        </View>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  profileCard: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  avatar: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontFamily: fonts.displaySemibold, fontSize: 16, color: colors.white },
  profileBody: { flex: 1, gap: 2 },
  profileName: { fontFamily: fonts.display, fontSize: 16, color: colors.ink },
  profileGrade: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted },
  streak: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: colors.bgSoft, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  streakText: { fontFamily: fonts.bodySemibold, fontSize: 13, color: colors.ink },
  levelRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  levelBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: colors.primary, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  levelBadgeText: { fontFamily: fonts.bodySemibold, fontSize: 12, color: colors.white },
  xpText: { fontFamily: fonts.bodyMedium, fontSize: 12, color: colors.muted },
  highlightRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  body: { flex: 1, gap: 3 },
  eyebrow: { fontFamily: fonts.bodyMedium, fontSize: 11, color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.4 },
  title: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.ink },
  exploreCta: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    backgroundColor: colors.primaryDeep, borderRadius: 16, paddingVertical: 14, marginTop: 4,
  },
  exploreCtaText: { fontFamily: fonts.bodySemibold, fontSize: 13.5, color: colors.white },
})
